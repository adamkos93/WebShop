using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceProduct
{
    public interface IServiceProduct
    {
        Task<ProductDto> GetAsync(string name);

        Task<ProductDto> GetAsync(int id);

        Task<IEnumerable<ProductDto>> GetAllAsync();

        Task<IEnumerable<CategoryDto>> GetAllCategoriesAsync();

        Task<IEnumerable<ProductDto>> GetAllByCategoryAsync(int categoryId);

        Task<IEnumerable<ProductDto>> BrowseAsync(string name = "");

        Task AddAsync(ProductDto product);

        Task UpdateAsync(ProductDto product);

        Task<Tuple<List<ProductDto>, int>> GetFilteredProducts(int page, int max, int? categoryId, int? minPrice, int? maxPrice, string name);
        Task DeleteAsync(int id);

        Task<IEnumerable<ProductDto>> GetSelectedProducts(int[] productIds);

    }
}
