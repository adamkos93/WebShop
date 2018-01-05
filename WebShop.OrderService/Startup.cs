
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using WebShop.Data.Repositories;
using WebShop.Infrastucture.Repositories;
using WebShop.Infrastucture.Mappers;
using WebShop.Data;
using WebShop.Infrastucture.Services.ServiceOrder;

namespace WebShop.OrderService
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IServiceOrder, ServiceOrder>();
            services.AddSingleton(AutoMapperConfig.Initialize());
            services.AddEntityFrameworkSqlServer().AddDbContext<StoreWebDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("defaultConnectionString")), ServiceLifetime.Scoped);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }
    }
}
