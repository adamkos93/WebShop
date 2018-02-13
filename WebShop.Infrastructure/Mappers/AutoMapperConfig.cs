using AutoMapper;
using System;
using WebShop.Data.Domain;
using WebShop.Infrastructure.DTO;
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
                cfg.CreateMap<OrderDto, Order>()
                 .ForMember(dto => dto.User, y => y.Ignore());
                cfg.CreateMap<UserDto, User>();
                cfg.CreateMap<User, UserDto>();
                cfg.CreateMap<OrderProduct, OrderProductDto>()
                   .ForMember(dto => dto.Order, y => y.Ignore());
                cfg.CreateMap<OrderProductDto, OrderProduct>()
                   .ForMember(dto => dto.Product, y => y.Ignore())
                   .ForMember(dto => dto.Order, y => y.Ignore());
            })
            .CreateMapper();
    }
}
