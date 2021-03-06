﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Infrastucture.DTO
{
    public class UserDto
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }

        public string Salt { get; set; }

        public List<OrderDto> Orders { get; set; }
    }
}
