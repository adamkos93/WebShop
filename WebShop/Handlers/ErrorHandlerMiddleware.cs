using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;


namespace WebShop.Handlers
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (UnauthorizedAccessException exception)
            {
              await HandleErrorAsync(context, exception);
            }
            catch (Exception exception)
            {
                await HandleErrorAsync(context, exception);
            }
        }

        private static Task HandleErrorAsync(HttpContext context, Exception exception)
        {
            var response = new { message = exception.Message };
            var payload = JsonConvert.SerializeObject(response);
            context.Response.ContentType = "application/json";
            var exceptionType = exception.GetType().Name;
            if (exceptionType == "UnauthorizedAccessException")
            {
              context.Response.StatusCode = 401;
            }
            else {
              context.Response.StatusCode = 400;
            }
            return context.Response.WriteAsync(payload);
        }
    }
}
