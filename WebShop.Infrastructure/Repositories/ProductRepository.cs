using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebShop.Data;
using WebShop.Data.Domain;
using WebShop.Data.Repositories;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WebShop.Infrastucture.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreWebDbContext _storeWebDbContext;

        public ProductRepository(StoreWebDbContext storeWebDbContext)
        {
            _storeWebDbContext = storeWebDbContext;
        }

        public async Task<Product> GetAsync(int id)
            => await _storeWebDbContext.Product.FirstOrDefaultAsync(x => x.Id == id);

        public async Task<Product> GetAsync(string name)
          => await Task.FromResult(_storeWebDbContext.Product.SingleOrDefault(x =>
              x.Name.ToLowerInvariant() == name.ToLowerInvariant()));

        public async Task<IEnumerable<Product>> GetAllAsync()
            => await _storeWebDbContext.Product.ToListAsync();

        public async Task<IEnumerable<Product>> BrowseAsync(string name = "")
        {
            var products = _storeWebDbContext.Product.AsEnumerable();
            if (!string.IsNullOrWhiteSpace(name))
            {
                products = products.Where(x => x.Name.ToLowerInvariant()
                    .Contains(name.ToLowerInvariant()));
            }

            return await Task.FromResult(products);
        }

        public async Task AddAsync(Product product)
        {
            await _storeWebDbContext.Product.AddAsync(product);
            await _storeWebDbContext.SaveChangesAsync();
        }
        public async Task UpdateAsync(Product product)
        {
            _storeWebDbContext.Product.Update(product);
            await _storeWebDbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var user = await GetAsync(id);
            _storeWebDbContext.Product.Remove(user);
            await _storeWebDbContext.SaveChangesAsync();
        }
    }
}
