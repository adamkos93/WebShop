using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services.ServiceUser
{
    public interface IServiceUser
    {
        Task<TokenDto> LoginAsync(UserDto user);
        Task RegisterAsync(UserDto user);
    }
}
