using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShop.Infrastucture.DTO;
using WebShop.Infrastucture.Services.ServiceOrder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace WebShop.OrderService.Controllers
{
    [Route("[controller]")]
    public class OrderController : Controller
    {
        private readonly IServiceOrder _orderService;


        public OrderController(IServiceOrder orderService)
        {
            _orderService = orderService;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/values
        [HttpPost("addOrder")]
        public async Task<IActionResult> AddOrder([FromBody]OrderDto order)
        {
            await _orderService.AddOrUpdateAsync(order);
            return Json("OK");
        }

        [HttpPut("updateOrder")]
        public async Task<IActionResult> UpdateOrder([FromBody]OrderDto order)
        {
            await _orderService.AddOrUpdateAsync(order, true);
            return Json("OK");
        }

        [HttpDelete("deleteOrder")]
        public async Task<IActionResult> DeleteOrder(int orderId)
        {
            await _orderService.DeleteAsync(orderId);
            return Json("OK");
        }
        [HttpGet("getOrdersByUser")]
        public async Task<Tuple<List<OrderDto>, int>> GetAllByUserAsync(int userId, int page, int max, bool? isNameAsc, bool? isDateAsc, bool? isStatusAsc)
        {
            return await _orderService.GetAllByUserAsync(userId, page, max, isDateAsc, isStatusAsc);
        }
        [HttpGet("getAllOrders")]
        public async Task<Tuple<List<OrderDto>, int>> GetAllAsync(int page, int max, bool? isNameAsc, bool? isDateAsc, bool? isStatusAsc)
        {
            return await _orderService.GetAllAsync(page, max, isDateAsc, isStatusAsc);
        }

        [HttpGet("getOrderById")]
        public async Task<IActionResult> GetOrderById(int orderId) {
            var order = await _orderService.GetOrderById(orderId);
            return Json(order);
        }

        [HttpGet("updateStatus")]
        public async Task UpdateStatus(int orderId, string status)
        {
           await _orderService.UpdateStatus(orderId,status);
        }
    }
}
