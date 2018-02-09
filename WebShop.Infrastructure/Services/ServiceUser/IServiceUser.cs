using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceUser
{
    public interface IServiceUser
    {
        Task<Tuple<TokenDto, int>> LoginAsync(UserDto user);
        Task RegisterAsync(UserDto user);
    }
}
