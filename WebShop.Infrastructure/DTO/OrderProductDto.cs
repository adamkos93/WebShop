using System;
using System.Collections.Generic;
using System.Text;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastructure.DTO
{
    public class OrderProductDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }

        public int OrderId { get; set; }

        public OrderDto Order { get; set; }

        public string ProductName { get; set; }

        public double Price { get; set; }

        public int Count { get; set; }
    }
}
