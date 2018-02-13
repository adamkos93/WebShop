﻿using System;
using System.Collections.Generic;
using System.Text;
using WebShop.Infrastructure.DTO;

namespace WebShop.Infrastucture.DTO
{
    public class OrderDto
    {
        public int? Id { get; set; }

        public DateTime? CreatedAt { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public string PostCode { get; set; }

        public string PhoneNumber { get; set; }

        public string Status { get; set; }

        public int StreetNumber { get; set; }

        public int? FlatNumber { get; set; }

        public int? UserId { get; set; }

        public List<OrderProductDto> OrderProducts { get; set; }

        public List<ProductItemDto> ProductItems { get; set; }
    }
}
