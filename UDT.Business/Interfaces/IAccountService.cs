using System;
using System.Collections.Generic;
using System.Text;

namespace UDT.Business.Interfaces
{
    public interface IAccountService
    {
        string Authenticate(string username, string password);
    }
}
