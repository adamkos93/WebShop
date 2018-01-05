using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Flurl.Http;
using Microsoft.Extensions.Options;
using WebShop.Shared.Settings;
using Flurl;
using WebShop.Infrastucture.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace WebShop.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly string _url;
        private readonly IFlurlClient _flurlClient;

        public UserController(IOptions<ServicesUrlConfig> url)
        {
            _url = url.Value.ServiceUserUrl;
            _flurlClient = new FlurlClient(_url);
        }


        [HttpGet("index")]
        public IActionResult Index()
        {
            return View("~/Views/Index.cshtml");
        }

        [Authorize]
        [HttpGet("test")]
        public IActionResult Test()
        {
            return Json("TEST");
        }

        [HttpPost("loginAsync")]
        public async Task<IActionResult> Login([FromBody] UserDto user)
        {
            var response = await _url.AppendPathSegments("user", "login").PostJsonAsync(user).ReceiveJson<TokenDto>();
            if (!String.IsNullOrEmpty(response.Token)) {
                Response.Cookies.Append("token", response.Token, new CookieOptions
                {
                    HttpOnly = true,
                    Expires = DateTime.Now.AddMinutes(15),
                    Secure = true
                });
            }
            //return Json(response);
            return View("~/Views/Index.cshtml", response);
        }


        [HttpPost("registerAsync")]
        public async Task<IActionResult> Register([FromBody] UserDto user)
        {
            var request = await _url.AppendPathSegments("user", "register").PostJsonAsync(user);
            //var request = await _flurlClient.BaseUrl.AppendPathSegments("user", "register").WithHeader("charset", "UTF-8").WithHeader("data", "text/html").WithHeader("Content-Type", "application/json").PostJsonAsync(new { Login = user.Login, Email = user.Email, Password = user.Password, Role = user.Role });
            return Json(request);
        }
    }
}
