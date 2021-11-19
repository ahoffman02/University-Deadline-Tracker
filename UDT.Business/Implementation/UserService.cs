using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UDT.Business.Interfaces;
using UDT.Model.Entities;
using UDT.Repository;

namespace UDT.Business.Implementation
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        public async Task<User> AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            User existingUser = await _context.Users.SingleAsync(user => user.Id == id);

            if (existingUser != null)
            {
                _context.Users.Remove(existingUser);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetByIDAsync(int id)
        {
            return await _context.Users.SingleAsync(user => user.Id == id);
        }

        public async Task<User> UpdateAsync(User user)
        {
            User existingUser = await _context.Users.SingleAsync(user => user.Id == user.Id);

            if (existingUser != null)
            {
                existingUser.Name = user.Name;
                existingUser.GroupId = user.GroupId;
                existingUser.Email = user.Email;
                existingUser.Role = user.Role;
                existingUser.Code = user.Code;

                await _context.SaveChangesAsync();
            }

            return existingUser;
        }

    }
}
