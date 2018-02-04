﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Infrastucture.DTO
{
    public class ProductDto
    {
        public int? Id { get; set; }

        public string Name { get; set; }

        public int CategoryId { get; set; }

        public double Price { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }

        public int? Amount { get; set; }

    }
}
