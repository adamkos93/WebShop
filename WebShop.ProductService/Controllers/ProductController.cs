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


        [HttpGet("getById")]
        public async Task<IActionResult> GetProduct(int productId)
        {
            var result = await _productService.GetAsync(productId);

            if (result == null)
            {
                return NotFound();
            }

            return Json(result);
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllProducts()
        {
            var result = await _productService.GetAllAsync();
            return Json(result);
        }

        [HttpGet("getCategories")]
        public async Task<IActionResult> GetCategories()
        {
            var result = await _productService.GetAllCategoriesAsync();
            return Json(result);
        }

        [HttpGet("getAllByCategory")]
        public async Task<IActionResult> GetAllProductByCategory(int categoryId)
        {
            var result = await _productService.GetAllByCategoryAsync(categoryId);
            return Json(result);
        }

        // POST api/values
        [HttpPost("addProduct")]
        public async Task<IActionResult> AddProduct([FromBody]ProductDto product)
        {
            await _productService.AddAsync(product);
            return Json("OK");
        }

        // POST api/values
        [HttpPut("updateProduct")]
        public async Task<IActionResult> UpdateProduct([FromBody]ProductDto product)
        {
            await _productService.UpdateAsync(product);
            return Json("OK");
        }

        // DELETE api/values/5
        [HttpDelete("removeProduct")]
        public async Task<IActionResult> RemoveProduct(int productId)
        {
            await _productService.DeleteAsync(productId);
            return Json("OK");
        }

        [HttpGet("getFilteredProducts")]
        public async Task<Tuple<List<ProductDto>, int>> GetFilteredProducts(int page, int max, int? categoryId, int? minPrice, int? maxPrice, string name)
        {
            return await _productService.GetFilteredProducts(page, max, categoryId, minPrice, maxPrice, name);
        }
    }
}
