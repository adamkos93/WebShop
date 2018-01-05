
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebShop.Infrastucture.Repositories;
using WebShop.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using WebShop.Infrastucture.Services;
using WebShop.Infrastucture.Mappers;
using WebShop.Data;
using WebShop.Infrastucture.Services.ServiceUser;
using WebShop.Infrastucture.Helpers.Encrypter;
using WebShop.Shared.Settings;

namespace WebShop.UserService
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
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IServiceUser, ServiceUser>();
            services.AddSingleton(AutoMapperConfig.Initialize());
            services.AddSingleton<IEncrypter, Encrypter>();
            services.AddSingleton<IJwtHandler, JwtHandler>();
            services.Configure<JwtSettings>(Configuration.GetSection("jwt"));
            services.AddEntityFrameworkSqlServer().AddDbContext<StoreWebDbContext>(options =>
             options.UseSqlServer(Configuration.GetConnectionString("defaultConnectionString")), ServiceLifetime.Scoped);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseMvc();
            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}
            //app.UseMvcWithDefaultRoute();
        }
    }
}
