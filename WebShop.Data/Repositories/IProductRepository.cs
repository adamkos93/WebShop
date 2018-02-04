using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data.Domain;

namespace WebShop.Data.Repositories
{
    public interface IProductRepository
    {

        Task<Product> GetAsync(int id);

        Task<Product> GetAsync(string name);

        Task<IEnumerable<Product>> GetAllAsync();

        Task<IEnumerable<Category>> GetAllCategoriesAsync();

        Task<IEnumerable<Product>> GetAllByCategoryAsync(int categoryId);

        Task<IEnumerable<Product>> BrowseAsync(string name = "");

        Task AddAsync(Product product);

        Task UpdateAsync(Product product);

        Task DeleteAsync(int id);

        Task<Tuple<List<Product>, int>> GetFilteredProducts(int page, int max, int? categoryId, int? minPrice, int? maxPrice, string name);

    }
}
