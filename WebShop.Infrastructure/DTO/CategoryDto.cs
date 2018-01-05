using System;
using System.Collections.Generic;
using System.Text;
using WebShop.Data.Domain;

namespace WebShop.Infrastucture.DTO
{
    public class CategoryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<ProductDto> Products { get; set; }

    }
}
