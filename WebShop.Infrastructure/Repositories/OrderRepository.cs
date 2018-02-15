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

        public async Task<Order> GetAsync(int id)
          => await _storeWebDbContext.Order.FirstOrDefaultAsync(x => x.Id == id);

        public async Task<Tuple<List<Order>,int>> GetAllByUserAsync(int userId, int page, int max, bool? isDateAsc, bool? isStatusAsc)
        {
            var query = _storeWebDbContext.Order.AsQueryable();

            if (isDateAsc != null)
            {
                if (isDateAsc == true)
                {
                    query = query.OrderBy(x => x.CreatedAt);
                }
                else
                {
                    query = query.OrderByDescending(x => x.CreatedAt);
                }
            }

            if (isStatusAsc != null)
            {
                if (isStatusAsc == true)
                {
                    query = query.OrderBy(x => x.Status);
                }
                else
                {
                    query = query.OrderByDescending(x => x.Status);
                }
            }

            int totalRecords = query.Count();

            int skipRows = (page - 1) * max;

            var result = await Task.FromResult(query.Where(x => x.UserId == userId).Skip(skipRows).Take(max).ToList());
            return Tuple.Create(result, totalRecords);
        }


        public async Task<Tuple<List<Order>,int>> GetAllAsync(int page, int max, bool? isDateAsc, bool? isStatusAsc)
        {
            var query = _storeWebDbContext.Order.AsQueryable();

            if (isDateAsc != null)
            {
                if (isDateAsc == true) {
                    query = query.OrderBy(x => x.CreatedAt);
                } else {
                    query = query.OrderByDescending(x => x.CreatedAt);
                }
            }

            if (isStatusAsc != null)
            {
                if (isStatusAsc == true)
                {
                    query = query.OrderBy(x => x.Status);
                }
                else
                {
                    query = query.OrderByDescending(x => x.Status);
                }
            }

            int totalRecords = query.Count();

            int skipRows = (page - 1) * max;

            var result = await Task.FromResult(query.Skip(skipRows).Take(max).ToList());
            return Tuple.Create(result, totalRecords);
        }


        public async Task<Order> getOrderById(int orderId)
            => await _storeWebDbContext.Order.Include(x => x.OrderProducts).FirstAsync(x => x.Id == orderId);

        public async Task AddAsync(Order order, Dictionary<int,int> productItems)
        {
            await _storeWebDbContext.Order.AddAsync(order);
            await _storeWebDbContext.SaveChangesAsync();

            int id = order.Id;

            if (productItems.Count > 0 && id > 0)
            {
                List<OrderProduct> orderproducts = await processOrderProducts(id, productItems);
                await _storeWebDbContext.OrderProduct.AddRangeAsync(orderproducts);
                await refreshCountOfProducts(productItems);
                await _storeWebDbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateStatus(int orderId, string status)
        {
            var order = await _storeWebDbContext.Order.FirstOrDefaultAsync(x => x.Id == orderId);
            if (order != null)
            {
                order.Status = status;
            }
            _storeWebDbContext.Order.Update(order);
            await _storeWebDbContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(Order order, Dictionary<int, int> productItems)
        {
            _storeWebDbContext.Order.Update(order);
            Dictionary<int, int> oldProductItems = new Dictionary<int, int>();
            Task<List<OrderProduct>> oldProductsIds = _storeWebDbContext.OrderProduct.Where(x => x.OrderId == order.Id).ToListAsync(); //todo do sprawdzenia , jesli nie bangla to bez task
            foreach (var item in oldProductsIds.Result)
            {
                oldProductItems.Add(item.ProductId, item.Count);
            }
            _storeWebDbContext.OrderProduct.RemoveRange(oldProductsIds.Result);
            await refreshCountOfProducts(productItems, true);
            if (productItems.Count > 0 && order.Id > 0)
            {
                List<OrderProduct> orderproducts = await processOrderProducts(order.Id, productItems);
                await _storeWebDbContext.OrderProduct.AddRangeAsync(orderproducts);
                await refreshCountOfProducts(productItems);
            }
            await _storeWebDbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int orderId)
        {
            Dictionary<int, int> productItems = new Dictionary<int, int>();
            var order = await GetAsync(orderId);
            Task<List<OrderProduct>> oldProductsIds = _storeWebDbContext.OrderProduct.Where(x => x.OrderId == orderId).ToListAsync();
            foreach (var item in oldProductsIds.Result)
            {
                productItems.Add(item.ProductId, item.Count);
            }
            _storeWebDbContext.OrderProduct.RemoveRange(oldProductsIds.Result);
            _storeWebDbContext.Order.Remove(order);
            await refreshCountOfProducts(productItems, true);
            await _storeWebDbContext.SaveChangesAsync();
        }

        private async Task<List<OrderProduct>> processOrderProducts(int orderId, Dictionary<int, int> productItems)
        {
            List<OrderProduct> orderproducts = new List<OrderProduct>();
            foreach (var item in productItems) {
                var product = await _storeWebDbContext.Product.FirstAsync(x => x.Id == item.Key);
                orderproducts.Add(new OrderProduct {
                    OrderId = orderId,
                    ProductId = item.Key,
                    Count = item.Value,
                    ProductName = product.Name,
                    Price = product.Price
                });
            }
            return orderproducts;
        }

        private async Task refreshCountOfProducts(Dictionary<int, int> productItems, bool isRemoved=false) {
            foreach (var item in productItems)
            {
                var entity =  _storeWebDbContext.Product.First(x => x.Id == item.Key);
                if (isRemoved)
                {
                    entity.Amount = entity.Amount + item.Value;
                }
                else {
                    entity.Amount = entity.Amount - item.Value;
                }
                
                 _storeWebDbContext.Product.Update(entity);
                await _storeWebDbContext.SaveChangesAsync();
            }
        }
    }
}
