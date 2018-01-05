using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using WebShop.Data.Domain;

namespace WebShop.Data
{
    public class StoreWebDbContext : DbContext
    {
        public StoreWebDbContext(DbContextOptions<StoreWebDbContext> options) : base(options)
        {

        }

        public DbSet<Product> Product { get; set; }

        public DbSet<Category> Category { get; set; }

        public DbSet<User> User { get; set; }

        public DbSet<Order> Order { get; set; }

        public DbSet<OrderProduct> OrderProduct { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<OrderProduct>()
        //        .HasKey(op => new { op.OrderId, op.ProductId });

        //    modelBuilder.Entity<OrderProduct>()
        //        .HasOne(op => op.Order)
        //        .WithMany(o => o.OrderProducts)
        //        .HasForeignKey(op => op.OrderId);

        //    modelBuilder.Entity<OrderProduct>()
        //        .HasOne(op => op.Product)
        //        .WithMany(p => p.OrderProducts)
        //        .HasForeignKey(op => op.ProductId);
        //}

    }

    class StoreWebDbContextFactory : IDbContextFactory<StoreWebDbContext>
    {
        public StoreWebDbContext Create(DbContextFactoryOptions options)
        {
            var optionsBuilder = new DbContextOptionsBuilder<StoreWebDbContext>();
            
            optionsBuilder.UseSqlServer("Data Source = DESKTOP-2TMUR6C; Initial Catalog = StoreWebDb; Integrated Security = SSPI", b => b.MigrationsAssembly("WebShop.Data"));

            return new StoreWebDbContext(optionsBuilder.Options);
        }
    }
}
