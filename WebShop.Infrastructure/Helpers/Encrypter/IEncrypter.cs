﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Infrastucture.Helpers.Encrypter
{
    public interface IEncrypter
    {
        string GetSalt(string value);
        string GetHash(string value, string salt);
    }
}
