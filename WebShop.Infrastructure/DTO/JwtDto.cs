using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Infrastucture.DTO
{
    public class JwtDto
    {
        public string Token { get; set; }
        public long Expires { get; set; }
    }
}
