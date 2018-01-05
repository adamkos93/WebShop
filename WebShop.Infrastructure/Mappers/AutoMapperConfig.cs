using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using WebShop.Data.Domain;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Mappers
{
    public static class AutoMapperConfig
    {
        public static IMapper Initialize()
            => new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Category, CategoryDto>();
                cfg.CreateMap<CategoryDto, Category>();
                cfg.CreateMap<Product, ProductDto>();
                cfg.CreateMap<ProductDto, Product>();
                cfg.CreateMap<Order, OrderDto>();
                cfg.CreateMap<OrderDto, Order>();
                cfg.CreateMap<UserDto, User>();
                cfg.CreateMap<User, UserDto>();
            })
            .CreateMapper();
    }
}
