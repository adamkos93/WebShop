using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShop.Infrastucture.DTO;
using WebShop.Infrastucture.Services.ServiceOrder;

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
            await _orderService.AddAsync(order);
            return NoContent();
        }

        [HttpPut("updateOrder")]
        public async Task<IActionResult> UpdateOrder([FromBody]OrderDto order)
        {
            await _orderService.UpdateAsync(order);
            return NoContent();
        }

        [HttpDelete("deleteOrder")]
        public async Task<IActionResult> DeleteOrder([FromBody]OrderDto order)
        {
            await _orderService.DeleteAsync(order);
            return NoContent();
        }
    }
}
