using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShop.Infrastucture.Services.ServiceProduct;
using WebShop.Infrastucture.DTO;

namespace WebShop.ProductService.Controllers
{
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly IServiceProduct _productService;

        public ProductController(IServiceProduct productService)
        {
            _productService = productService;
        }


        [HttpGet("productId")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var result = await _productService.GetAsync(id);

            if (result == null)
            {
                return NotFound();
            }

            return Json(result);
        }

        // POST api/values
        [HttpPost("addProduct")]
        public async Task<IActionResult> AddProduct([FromBody]ProductDto product)
        {
            await _productService.AddAsync(product);
            return NoContent();
        }

        // POST api/values
        [HttpPut("updateProduct")]
        public async Task<IActionResult> UpdateProduct([FromBody]ProductDto product)
        {
            await _productService.UpdateAsync(product);
            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("deleteProduct")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            await _productService.DeleteAsync(id);
            return NoContent();
        }
    }
}
