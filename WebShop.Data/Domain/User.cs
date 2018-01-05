﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Data.Domain
{
    public class User
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }

        public string Salt { get; set; }
    }
}
