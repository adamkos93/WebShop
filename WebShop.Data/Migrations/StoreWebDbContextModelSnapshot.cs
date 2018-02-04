using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using WebShop.Data;

namespace WebShop.Data.Migrations
{
    [DbContext(typeof(StoreWebDbContext))]
    partial class StoreWebDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebShop.Data.Domain.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("WebShop.Data.Domain.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int>("FlatNumber");

                    b.Property<string>("PostCode");

                    b.Property<string>("Status");

                    b.Property<string>("Street");

                    b.Property<int?>("StreetNumber");

                    b.Property<string>("Title");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("WebShop.Data.Domain.OrderProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("OrderId");

                    b.Property<int>("ProductId");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderProduct");
                });

            modelBuilder.Entity("WebShop.Data.Domain.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Amount");

                    b.Property<int>("CategoryId");

                    b.Property<string>("Description");

                    b.Property<string>("Image");

                    b.Property<string>("Name");

                    b.Property<double>("Price");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("WebShop.Data.Domain.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.Property<string>("Role");

                    b.Property<string>("Salt");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("WebShop.Data.Domain.Order", b =>
                {
                    b.HasOne("WebShop.Data.Domain.User", "User")
                        .WithMany("Orders")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebShop.Data.Domain.OrderProduct", b =>
                {
                    b.HasOne("WebShop.Data.Domain.Order", "Order")
                        .WithMany("OrderProducts")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebShop.Data.Domain.Product", "Product")
                        .WithMany("OrderProducts")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebShop.Data.Domain.Product", b =>
                {
                    b.HasOne("WebShop.Data.Domain.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
