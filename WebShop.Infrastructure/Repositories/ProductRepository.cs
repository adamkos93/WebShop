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

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
          => await _storeWebDbContext.Category.ToListAsync();

        public async Task<IEnumerable<Product>> GetAllByCategoryAsync(int categoryId)
            => await _storeWebDbContext.Product.Where(x=>x.CategoryId==categoryId).ToListAsync();

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
            try {
                await _storeWebDbContext.Product.AddAsync(product);
                await _storeWebDbContext.SaveChangesAsync();
            }
            catch (Exception e) {
                var response = new { message = e.Message };
            }
        }
        public async Task UpdateAsync(Product product)
        {
            _storeWebDbContext.Product.Update(product);
            await _storeWebDbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var product = await GetAsync(id);
            _storeWebDbContext.Product.Remove(product);
            await _storeWebDbContext.SaveChangesAsync();
        }

        public async Task<Tuple<List<Product>, int>> GetFilteredProducts(int page, int max, int? categoryId, int? minPrice, int? maxPrice, string name)
        {

            var query = _storeWebDbContext.Product.AsQueryable();

            if (categoryId > 0)
            {
                query = query.Where(x => x.CategoryId == categoryId);
            }

            if (minPrice > 0)
            {
                query = query.Where(x => x.Price >= minPrice);
            }

            if (maxPrice > 0)
            {
                query = query.Where(x => x.Price <= maxPrice);
            }

            if (!String.IsNullOrEmpty(name))
            {
                query = query.Where(x => x.Name.Contains(name));
            }

            int totalRecords = query.Count();

            int skipRows = (page - 1) * max;

            var result = await Task.FromResult(query.Skip(skipRows).Take(max).ToList());

            return Tuple.Create(result, totalRecords);

        }
    }
}
