using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShop.Infrastucture.DTO;
using WebShop.Infrastucture.Services.ServiceUser;

namespace WebShop.UserService.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IServiceUser _userService;

        public UserController(IServiceUser userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserDto user)
        {
            var result = await _userService.LoginAsync(user);
            return Json(result);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDto user)
        {

            await _userService.RegisterAsync(user);
            return NoContent();
        }

    }
}
