using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebShop.Infrastucture.Services;
using WebShop.Shared.Settings;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebShop.Handlers;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WebShop
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc().AddJsonOptions(options => {
              options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
              options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddSession();
            //services.AddDistributedMemoryCache();
            //services.AddSession(options =>
            //{ 
            //    options.CookieHttpOnly = true;
            //    options.CookieName = ".ASPNetCoreSession";
            //    options.IdleTimeout = TimeSpan.FromMinutes(15);
            //    options.CookiePath = "/";
            //});
            services.Configure<JwtSettings>(Configuration.GetSection("jwt"));
            services.Configure<ServicesUrlConfig>(Configuration.GetSection("services"));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            var jwtSettings = app.ApplicationServices.GetService<IOptions<JwtSettings>>();
            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                TokenValidationParameters = new TokenValidationParameters 
                {
                    ValidIssuer = jwtSettings.Value.Issuer,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Value.Key))
                }
            });
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //app.Use(async (context, next) => {
            //    await next();
            //    if (context.Response.StatusCode == 404 &&
            //       !Path.HasExtension(context.Request.Path.Value) &&
            //       !context.Request.Path.Value.StartsWith("/api/")) //TODO CHANGE CONDITION
            //    {
            //        context.Request.Path = "/index.html"; // TODO CHANGE PATH
            //        await next();
            //    }
            //});
            app.UseMiddleware<ErrorHandlerMiddleware>();
            app.UseSession();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
