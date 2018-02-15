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

        public bool isLogged()
        {
           return !String.IsNullOrEmpty(HttpContext.Session.GetString("UserId"));     
        }

        [HttpGet("isUserLogged")]
        public IActionResult IsUserLogged()
        {
           var result = isLogged();
           return Json(result.ToString().ToLower());
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
           HttpContext.Session.Clear();
           return Json("OK");
        }

        [HttpPost("loginAsync")]
        public async Task<IActionResult> Login([FromBody] UserDto user)
        {
            var response = await _url.AppendPathSegments("user", "login").PostJsonAsync(user).ReceiveJson<Tuple<TokenDto,int>>();

            if (response.Item2 > 0)
            {
                HttpContext.Session.SetString("UserId", response.Item2.ToString());
            }
            
            if (!String.IsNullOrEmpty(response.Item1.Token)) {
              return Json(response.Item1);
            }

            return null;
          
        }


        [HttpPost("registerAsync")]
        public async Task<IActionResult> Register([FromBody] UserDto user)
        {
            await _url.AppendPathSegments("user", "register").PostJsonAsync(user);
            //var request = await _flurlClient.BaseUrl.AppendPathSegments("user", "register").WithHeader("charset", "UTF-8").WithHeader("data", "text/html").WithHeader("Content-Type", "application/json").PostJsonAsync(new { Login = user.Login, Email = user.Email, Password = user.Password, Role = user.Role });
            return Json("OK");
        }
    }
}
