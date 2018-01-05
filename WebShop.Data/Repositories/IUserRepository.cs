using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Data.Domain;

namespace WebShop.Data.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetAsync(string email);

        Task RegisterAsync(User user);
    }
}
