using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Flurl.Http;
using Microsoft.Extensions.Options;
using WebShop.Shared.Settings;
using WebShop.Infrastucture.DTO;
using Flurl;

namespace WebShop.Controllers
{
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly string _url;
        private readonly IFlurlClient _flurlClient;
        
        public ProductController(IOptions<ServicesUrlConfig> url)
        {
          _url = url.Value.ServiceProductUrl;
          _flurlClient = new FlurlClient(_url);
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllProducts()
        {
          var result = await  _url.AppendPathSegments("product", "getAll").GetAsync().ReceiveJson<List<ProductDto>>();

          if (result == null)
          {
            result = new List<ProductDto>();
          }
        
          return Json(result);
        }
        
        [HttpGet("getAllByCategory")]
        public async Task<IActionResult> GetAllProductByCategory(int categoryId)
        {
          var result = await _url.AppendPathSegments("product", "getAllByCategory").SetQueryParam("categoryId", categoryId).GetAsync().ReceiveJson<List<ProductDto>>();
          if (result == null)
          {
            result = new List<ProductDto>(); ;
          }    
          return Json(result);
        }

        [HttpPost("addProduct")]
        public async Task<IActionResult> AddProduct([FromBody] ProductDto product)
        {
          await _url.AppendPathSegments("product", "addProduct").PostJsonAsync(product);
          return Json("OK");
        }
  }
}
