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
        Task<List<OrderDto>> GetAllByUserAsync(int userId);
        Task<List<OrderDto>> GetAllAsync();
        Task<OrderDto> GetOrderById(int orderId);

    }
}
