using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data.Domain;

namespace WebShop.Data.Repositories
{
    public interface IOrderRepository
    {
        Task AddAsync(Order order, Dictionary<int, int> productItems);
        Task UpdateAsync(Order order, Dictionary<int, int> productItems);
        Task DeleteAsync(int orderId);
    }
}
