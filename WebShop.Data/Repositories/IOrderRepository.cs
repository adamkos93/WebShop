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
        Task<Tuple<List<Order>, int>> GetAllByUserAsync(int userId, int page, int max, bool? isDateAsc, bool? isStatusAsc);
        Task<Tuple<List<Order>, int>> GetAllAsync(int page, int max, bool? isDateAsc, bool? isStatusAsc);
        Task<Order> getOrderById(int orderId);
        Task UpdateStatus(int orderId, string status);
    }
}
