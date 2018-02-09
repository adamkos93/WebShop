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
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using WebShop.Infrastructure.DTO;

namespace WebShop.Controllers
{
    [Route("[controller]")]
    public class OrderController : Controller
    {
       private readonly string _url;
       private readonly IFlurlClient _flurlClient;
       public OrderController(IOptions<ServicesUrlConfig> url)
       {
         _url = url.Value.ServiceUserUrl;
         _flurlClient = new FlurlClient(_url);
       }

       public int getUserId()
       {
         return Int32.Parse(HttpContext.Session.GetString("UserId"));
       }

    //todo cookie basket
       public List<ProductItemDto> getbasketCookie()
       {
         string sourceString = HttpContext.Request.Headers["Cookie"].ToString();
         List<ProductItemDto> productItems = new List<ProductItemDto>();
         if (!String.IsNullOrEmpty(sourceString))
         {
           string removeString = "basketItems=";
           int index = sourceString.IndexOf(removeString);
           string cleanPath = (index < 0)
               ? sourceString
               : sourceString.Remove(index, removeString.Length);
           productItems = JsonConvert.DeserializeObject<List<ProductItemDto>>(cleanPath);
           
         }
         return productItems;
       }

       [HttpGet]
       public IEnumerable<string> Get()
       {
         return new string[] { "value1", "value2" };
       }
       
       // POST api/values
       [HttpPost("addOrder")]
       public async Task<IActionResult> AddOrder([FromBody]OrderDto order)
       {
         if (order == null) { throw new ArgumentNullException(nameof(order)); }
         order.UserId = getUserId();
         order.ProductItems = getbasketCookie();
         var result = await _url.EnableCookies().AppendPathSegments("order", "addOrder").PostJsonAsync(order);
         return Json(result);
       }
       
       [HttpPut("updateOrder")]
       public async Task<IActionResult> UpdateOrder([FromBody]OrderDto order)
       {
          if (order == null) { throw new ArgumentNullException(nameof(order)); }
          order.UserId = getUserId();
          order.ProductItems = getbasketCookie();
          var result = await _url.AppendPathSegments("order", "updateOrder").PutJsonAsync(order);
          return Json(result);
       }
       
       [HttpDelete("deleteOrder")]
       public async Task<IActionResult> DeleteOrder(int orderId)
       {
          if (orderId <= 0) { throw new ArgumentNullException(nameof(orderId)); }
          var result = await _url.AppendPathSegments("order", "deleteOrder").SetQueryParam("orderId", orderId).DeleteAsync();
          return Json(result);
       }
  }
}
