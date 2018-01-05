﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebShop.Data.Repositories;
using WebShop.Data.Domain;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceProduct
{
    public class ServiceProduct : IServiceProduct
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;
        public ServiceProduct(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }
        public async Task<ProductDto> GetAsync(int id)
        {
            if (id < 0) { throw new ArgumentException(nameof(id)); }
            var product = await _productRepository.GetAsync(id);
            return _mapper.Map<Product, ProductDto>(product);
        }


        public async Task<ProductDto> GetAsync(string name)
        {
            var product = await _productRepository.GetAsync(name);
            return _mapper.Map<Product, ProductDto>(product);
        }

        public async Task<IEnumerable<ProductDto>> GetAllAsync()
        {
            var products = await _productRepository.GetAllAsync();
            if (products == null) { throw new NullReferenceException(nameof(products)); }
            return _mapper.Map<IEnumerable<Product>, IEnumerable<ProductDto>>(products);
        }

        public async Task<IEnumerable<ProductDto>> BrowseAsync(string name = "")
        {
            if (name == null) { throw new ArgumentNullException(nameof(name)); }
            var products = await _productRepository.BrowseAsync(name);
            if (products == null) { throw new NullReferenceException(nameof(products)); }
            return _mapper.Map<IEnumerable<Product>, IEnumerable<ProductDto>>(products);
        }

        public async Task AddAsync(ProductDto product)
        {
            if (product == null) { throw new ArgumentNullException(nameof(product)); }
            var domainProduct = _mapper.Map<ProductDto, Product>(product);
            await _productRepository.AddAsync(domainProduct);
        }
        public async Task UpdateAsync(ProductDto product)
        {
            if (product == null) { throw new ArgumentNullException(nameof(product)); }
            var domainProduct = _mapper.Map<ProductDto, Product>(product);
            await _productRepository.UpdateAsync(domainProduct);
        }

        public async Task DeleteAsync(int id)
        {
            if (id < 0) { throw new ArgumentException(nameof(id)); }
            await _productRepository.DeleteAsync(id);
        }
    }
}
