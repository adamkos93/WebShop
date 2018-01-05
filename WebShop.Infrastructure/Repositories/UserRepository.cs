using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data;
using WebShop.Data.Domain;
using WebShop.Data.Repositories;

namespace WebShop.Infrastucture.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly StoreWebDbContext _storeWebDbContext;

        public UserRepository(StoreWebDbContext storeWebDbContext)
        {
            _storeWebDbContext = storeWebDbContext;
        }

        public async Task<User> GetAsync(string email)
            => await _storeWebDbContext.User.FirstOrDefaultAsync(x => x.Email == email);

        public async Task RegisterAsync(User user)
        { 
           await _storeWebDbContext.User.AddAsync(user);
           await _storeWebDbContext.SaveChangesAsync();
        }
    }
}
