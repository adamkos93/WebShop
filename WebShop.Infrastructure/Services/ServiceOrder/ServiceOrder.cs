using AutoMapper;
using System;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data.Domain;
using WebShop.Data.Repositories;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceOrder
{
    public class ServiceOrder : IServiceOrder
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public ServiceOrder(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
        }

        public async Task AddAsync(OrderDto order)
        {
            if (order == null) { throw new ArgumentNullException(nameof(order)); }
            if (order.ProductIds == null) { throw new ArgumentNullException(nameof(order.ProductIds)); }
            var domainOrder = _mapper.Map<OrderDto, Order>(order);
            await _orderRepository.AddAsync(domainOrder, order.ProductIds);
        }


        public async Task UpdateAsync(OrderDto order)
        {
            if (order == null) { throw new ArgumentNullException(nameof(order)); }
            if (order.ProductIds == null) { throw new ArgumentNullException(nameof(order.ProductIds)); }
            var domainOrder = _mapper.Map<OrderDto, Order>(order);
            await _orderRepository.UpdateAsync(domainOrder, order.ProductIds);
        }

        public async Task DeleteAsync(OrderDto order)
        {
            if (order == null) { throw new ArgumentNullException(nameof(order)); }
            if (order.ProductIds == null) { throw new ArgumentNullException(nameof(order.ProductIds)); }
            var domainOrder = _mapper.Map<OrderDto, Order>(order);
            await _orderRepository.DeleteAsync(domainOrder, order.ProductIds);
        }


    }
}
