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

        Task<IEnumerable<Product>> BrowseAsync(string name = "");

        Task AddAsync(Product product);

        Task UpdateAsync(Product product);

        Task DeleteAsync(int id);

    }
}
