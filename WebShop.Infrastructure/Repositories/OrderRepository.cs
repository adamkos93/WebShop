using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebShop.Data;
using WebShop.Data.Domain;
using WebShop.Data.Repositories;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WebShop.Infrastucture.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly StoreWebDbContext _storeWebDbContext;

        public OrderRepository(StoreWebDbContext storeWebDbContext)
        {
            _storeWebDbContext = storeWebDbContext;
        }

        public async Task AddAsync(Order order, List<int> productsIds)
        {
            await _storeWebDbContext.Order.AddAsync(order);
            await _storeWebDbContext.SaveChangesAsync();

            int id = order.Id;

            if (productsIds.Count > 0 && id > 0)
            {
                List<OrderProduct> orderproducts = processOrderProducts(id, productsIds);
                await _storeWebDbContext.OrderProduct.AddRangeAsync(orderproducts);
                await _storeWebDbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateAsync(Order order, List<int> productsIds)
        {
            _storeWebDbContext.Order.Update(order);
            Task<List<OrderProduct>> oldProductsIds = _storeWebDbContext.OrderProduct.Where(x => x.OrderId == order.Id).ToListAsync(); //todo do sprawdzenia , jesli nie bangla to bez task
            _storeWebDbContext.OrderProduct.RemoveRange(oldProductsIds.Result);
            if (productsIds.Count > 0 && order.Id > 0)
            {
                List<OrderProduct> orderproducts = processOrderProducts(order.Id, productsIds);
                await _storeWebDbContext.OrderProduct.AddRangeAsync(orderproducts);

            }
            await _storeWebDbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(Order order, List<int> productsIds)
        {
            Task<List<OrderProduct>> oldProductsIds = _storeWebDbContext.OrderProduct.Where(x => x.OrderId == order.Id).ToListAsync();
            _storeWebDbContext.OrderProduct.RemoveRange(oldProductsIds.Result);
            _storeWebDbContext.Order.Remove(order);
            await _storeWebDbContext.SaveChangesAsync();
        }

        private List<OrderProduct> processOrderProducts(int orderId, List<int> productsIds)
        {
            List<OrderProduct> orderproducts = new List<OrderProduct>();
            for (int i = 0; i < productsIds.Count; i++)
            {
                orderproducts.Add(new OrderProduct
                {
                    OrderId = orderId,
                    ProductId = productsIds[i]
                });
            }

            return orderproducts;
        }
    }
}
