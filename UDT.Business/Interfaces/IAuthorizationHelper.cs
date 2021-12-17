using System;
using System.Collections.Generic;
using System.Text;

namespace UDT.Business.Interfaces
{
    public interface IAuthorizationHelper
    {
        bool IsTokenValid(string token);
    }
}
