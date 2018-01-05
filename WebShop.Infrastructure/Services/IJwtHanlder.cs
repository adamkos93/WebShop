using System;
using System.Collections.Generic;
using System.Text;
using WebShop.Data.Domain;
using WebShop.Infrastucture.DTO;

namespace WebShop.Infrastucture.Services
{
    public interface IJwtHandler
    {
        JwtDto CreateToken(User user);
    }
}
