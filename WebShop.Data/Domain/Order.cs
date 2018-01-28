using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Data.Domain
{
    public class Order
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime CreatedAt { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public string PostCode { get; set; }

        public string Status { get; set; }

        public int? StreetNumber { get; set; }

        public int FlatNumber { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public List<OrderProduct> OrderProducts { get; set; }
    }
}
