﻿using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace WebShop.Shared.Extensions
{
    public static class SessionExtensions
    {
    public static void SetSession(this ISession session, string key, object value)
    {
        session.SetString(key, JsonConvert.SerializeObject(value));
    }

    public static T GetSession<T>(this ISession session, string key)
    {
        return JsonConvert.DeserializeObject<T>(session.GetString(key));
    }
    }
}
