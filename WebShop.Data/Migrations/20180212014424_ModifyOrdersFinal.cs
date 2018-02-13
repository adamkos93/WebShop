using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebShop.Data.Migrations
{
    public partial class ModifyOrdersFinal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalPrice",
                table: "Order");

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "OrderProduct",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "ProductName",
                table: "OrderProduct",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "OrderProduct");

            migrationBuilder.DropColumn(
                name: "ProductName",
                table: "OrderProduct");

            migrationBuilder.AddColumn<double>(
                name: "TotalPrice",
                table: "Order",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
