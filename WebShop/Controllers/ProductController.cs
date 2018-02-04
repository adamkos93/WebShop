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
      var result = await _url.AppendPathSegments("product", "getAll").GetAsync().ReceiveJson<List<ProductDto>>();

      if (result == null)
      {
        result = new List<ProductDto>();
      }

      return Json(result);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetProductById(int productId)
    {
      var result = await _url.AppendPathSegments("product", "getById").SetQueryParam("productId", productId).GetAsync().ReceiveJson<ProductDto>();

      if (result == null)
      {
        return NotFound();//todo 
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
      if (product == null) { throw new ArgumentNullException(nameof(product)); }
      var result = await _url.AppendPathSegments("product", "addProduct").PostJsonAsync(product);
      return Json(result);
    }

    [HttpPut("updateProduct")]
    public async Task<IActionResult> UpdateProduct([FromBody] ProductDto product)
    {
      if (product == null) { throw new ArgumentNullException(nameof(product)); }
      var result = await _url.AppendPathSegments("product", "updateProduct").PutJsonAsync(product);
      return Json(result);
    }

    [HttpDelete("removeProduct")]
    public async Task<IActionResult> RemoveProduct(int productId)
    {
      if (productId <= 0) { throw new ArgumentNullException(nameof(productId)); }
      var result = await _url.AppendPathSegments("product", "removeProduct").SetQueryParam("productId", productId).DeleteAsync();
      return Json(result);
    }


    [HttpGet("getCategories")]
    public async Task<IActionResult> GetCategories()
    {
      var result = await _url.AppendPathSegments("product", "getCategories").GetAsync().ReceiveJson<List<CategoryDto>>();

      if (result == null)
      {
        result = new List<CategoryDto>();
      }

      return Json(result);
    }

    [HttpGet("getFilteredProducts")]
    public async Task<IActionResult> GetFilteredProducts(int page, int max, int? categoryId, int? minPrice, int? maxPrice, string name)
    {
       var response = await _url.AppendPathSegments("product", "getFilteredProducts")
           .SetQueryParam("page", page)
           .SetQueryParam("max", max)
           .SetQueryParam("categoryId", categoryId)
           .SetQueryParam("minPrice", minPrice)
           .SetQueryParam("maxPrice", maxPrice)
           .SetQueryParam("name", name)
           .GetAsync().ReceiveJson<Tuple<List<ProductDto>, int>>();

       var result = new {
         products = response.Item1,
         totalRecords = response.Item2
       };
       return Json(result);
    }
  }

}
//if (categoryId > 0) {
//   request.SetQueryParam("categoryId", categoryId);
// }

// if (price > 0) {
//   request.SetQueryParam("price", price);
// }

// if (!String.IsNullOrEmpty(name)) {
//   request.SetQueryParam("name", name);
// }

//var result = await request.GetAsync().ReceiveJson<List<ProductDto>>();






//    var result = await _url.AppendPathSegments("product", "getAllByCategory").SetQueryParam("page", categoryId).GetAsync().ReceiveJson<List<ProductDto>>();
//         if (result == null)
//         {
//           result = new List<ProductDto>(); ;
//         }
//         return Json(result);
//      }
//}


