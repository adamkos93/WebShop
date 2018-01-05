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

        Task<IEnumerable<ProductDto>> BrowseAsync(string name = "");

        Task AddAsync(ProductDto product);

        Task UpdateAsync(ProductDto product);


        Task DeleteAsync(int id);

    }
}
