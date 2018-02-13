﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data.Domain;
using WebShop.Data.Repositories;
using WebShop.Infrastructure.DTO;
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

        public async Task AddOrUpdateAsync(OrderDto order, bool isUpdate = false)
        {
            if (order == null) { throw new ArgumentNullException(nameof(order)); }
            if (order.UserId <= 0) { throw new ArgumentNullException(nameof(order.UserId)); }
            if (order.ProductItems == null) { throw new ArgumentNullException(nameof(order.ProductItems)); }
            var domainOrder = _mapper.Map<OrderDto, Order>(order);
            Dictionary<int, int> productItems = new Dictionary<int, int>();
            foreach (var item in order.ProductItems) {
                productItems.Add(item.ProductId, item.Amount);
            }
            if (isUpdate) {
                await _orderRepository.UpdateAsync(domainOrder, productItems);
                return;
            }     
            await _orderRepository.AddAsync(domainOrder, productItems);
        }

        public async Task DeleteAsync(int orderId)
        {
            if (orderId < 0) { throw new ArgumentException(nameof(orderId)); }
            await _orderRepository.DeleteAsync(orderId);
        }

        public async Task<List<OrderDto>> GetAllByUserAsync(int userId) 
        {
            if (userId <= 0) { throw new ArgumentNullException(nameof(userId)); }
            var orders = await _orderRepository.GetAllAsync();
            if (orders == null) { throw new NullReferenceException(nameof(orders)); }
            return _mapper.Map<List<Order>, List<OrderDto>>(orders);
        }
        public async Task<List<OrderDto>> GetAllAsync()
        {
            var orders = await _orderRepository.GetAllAsync();
            if (orders == null) { throw new NullReferenceException(nameof(orders)); }
            return _mapper.Map<List<Order>, List<OrderDto>>(orders);
        }

        public async Task<OrderDto> GetOrderById(int orderId)
        {
            if (orderId <= 0) { throw new ArgumentNullException(nameof(orderId)); }
            var orderProducts = await _orderRepository.getOrderById(orderId);
            if (orderProducts == null) { throw new NullReferenceException(nameof(orderProducts)); }
            return _mapper.Map<Order, OrderDto>(orderProducts);
        }

    }
}
