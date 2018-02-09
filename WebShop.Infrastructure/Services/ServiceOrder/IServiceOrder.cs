using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceOrder
{
    public interface IServiceOrder
    {
        Task AddOrUpdateAsync(OrderDto order, bool isUpdate = false);
        Task DeleteAsync(int orderId);
    }
}
