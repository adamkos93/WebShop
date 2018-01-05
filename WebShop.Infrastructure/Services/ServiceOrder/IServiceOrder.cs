using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceOrder
{
    public interface IServiceOrder
    {
        Task AddAsync(OrderDto order);
        Task UpdateAsync(OrderDto order);
        Task DeleteAsync(OrderDto order);
    }
}
