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
using Microsoft.AspNetCore.Authorization;

namespace WebShop.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class OrderController : Controller
    {
       private readonly string _url;
       private readonly IFlurlClient _flurlClient;
       private string x; 
       public OrderController(IOptions<ServicesUrlConfig> url)
       {
         _url = url.Value.ServiceOrderUrl;
         _flurlClient = new FlurlClient(_url);
       }

       public int getUserId()
       {
          try
          {
            return Int32.Parse(HttpContext.Session.GetString("UserId"));
          }
          catch(Exception) {
             throw new UnauthorizedAccessException();
          }
       }

    //todo cookie basket
       public List<ProductItemDto> getbasketCookie()
       {
         string sourceString = HttpContext.Request.Headers["Cookie"].ToString();
         List<ProductItemDto> productItems = new List<ProductItemDto>();
         if (!String.IsNullOrEmpty(sourceString))
         {
            int firstIndex = sourceString.IndexOf("[");
            int lastIndex = sourceString.IndexOf("]");
            bool isInSourceStrig = firstIndex != -1 && lastIndex != -1;
            if (isInSourceStrig)
            {
              string cleanPath = sourceString.Substring(firstIndex, (lastIndex - firstIndex) + 1);
              productItems = JsonConvert.DeserializeObject<List<ProductItemDto>>(cleanPath);
            }
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
         order.CreatedAt = DateTime.Now;
         order.ProductItems = getbasketCookie();
         var result = await _url.AppendPathSegments("order", "addOrder").PostJsonAsync(order);
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

       [HttpGet("getOrdersByUser")]
       public async Task<IActionResult> GetAllByUserAsync(int page, int max, bool? isDateAsc, bool? isStatusAsc)
       {
         int userId = getUserId();
         var response = await _url.AppendPathSegments("order", "getOrdersByUser")
          .SetQueryParam("userId", userId)
          .SetQueryParam("page", page)
          .SetQueryParam("max", max)
          .SetQueryParam("isDateAsc", isDateAsc)
          .SetQueryParam("isStatusAsc", isStatusAsc)
          .GetAsync()
          .ReceiveJson<Tuple<List<OrderDto>, int>>();

         var result = new
         {
           orders = response.Item1,
           totalRecords = response.Item2
         };
       
         return Json(result);
       }

       [HttpGet("getAllOrders")]
       public async Task<IActionResult> GetAllAsync(int page, int max, bool? isDateAsc, bool? isStatusAsc)
       {
         var response = await _url.AppendPathSegments("order", "getAllOrders")
          .SetQueryParam("page", page)
          .SetQueryParam("max", max)
          .SetQueryParam("isDateAsc", isDateAsc)
          .SetQueryParam("isStatusAsc", isStatusAsc)
          .GetAsync()
          .ReceiveJson<Tuple<List<OrderDto>, int>>();

         var result = new
         {
           orders = response.Item1,
           totalRecords = response.Item2
         };

         return Json(result);
       }

       [HttpGet("getOrderById")]
       public async Task<IActionResult> GetOrderById(int orderId)
       {
         var result = await _url.AppendPathSegments("order", "getOrderById").SetQueryParam("orderId", orderId).GetAsync().ReceiveJson<OrderDto>();
         return Json(result);
       }

       [HttpGet("updateStatus")]
       public async Task UpdateStatus(int orderId, string status)
       {
         await _url.AppendPathSegments("order", "updateStatus").SetQueryParam("orderId", orderId).SetQueryParam("status", status).GetAsync();
       }
    }
}
