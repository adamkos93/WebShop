using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data.Domain;

namespace WebShop.Data.Repositories
{
    public interface IOrderRepository
    {
        Task AddAsync(Order order, List<int> productsIds);
        Task UpdateAsync(Order order, List<int> productsIds);
        Task DeleteAsync(Order order, List<int> productsIds);
    }
}
