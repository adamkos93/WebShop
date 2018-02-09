using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace WebShop.Data.Domain
{
    public class OrderProduct
    {
        [Key]
        public int Id { get; set; }
        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int OrderId { get; set; }

        public Order Order { get; set; }

        public int Count { get; set; }
    }
}
