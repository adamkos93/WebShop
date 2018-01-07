using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebShop.Controllers
{
    //[Produces("application/json")] do czego to?
    [Route("[controller]")]
    public class HomeController : Controller
    {
       public HomeController()
       {

       }

       [HttpGet("index")]
       public IActionResult Index()
       {
         return View("~/wwwroot/index.cshtml");
         //return View();
       }


       [HttpGet("test")]
       public IEnumerable<string> Get()
       {
         return new string[] { "Hello", "World" };
       }
  }
}