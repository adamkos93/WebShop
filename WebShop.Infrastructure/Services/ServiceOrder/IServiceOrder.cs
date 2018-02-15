using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Infrastructure.DTO;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceOrder
{
    public interface IServiceOrder
    {
        Task AddOrUpdateAsync(OrderDto order, bool isUpdate = false);
        Task DeleteAsync(int orderId);
        Task<Tuple<List<OrderDto>, int>> GetAllByUserAsync(int userId, int page, int max, bool? isDateAsc, bool? isStatusAsc);
        Task<Tuple<List<OrderDto>, int>> GetAllAsync(int page, int max, bool? isDateAsc, bool? isStatusAsc);
        Task<OrderDto> GetOrderById(int orderId);

        Task UpdateStatus(int orderId, string status);

    }
}
