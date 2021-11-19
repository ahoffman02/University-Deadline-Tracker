using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UDT.Model.Entities;

namespace UDT.Business.Interfaces
{
    public interface IUserService
    {
        Task<User> GetByIDAsync(int id);

        Task<List<User>> GetAllAsync();

        Task<User> AddAsync(User user);

        Task<bool> DeleteAsync(int id);

        Task<User> UpdateAsync(User user);

    }
}
