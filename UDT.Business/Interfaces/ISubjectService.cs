using System.Collections.Generic;
using System.Threading.Tasks;
using UDT.Model.Entities;

namespace UDT.Business.Interfaces
{
    public interface ISubjectService
    {
        IAsyncEnumerable<Subject> GetAllAsync();

        IAsyncEnumerable<Subject> GetAllSubjectUserIsAssignedTo(int id);

        Task<Subject> GetByIdAsync(int id);

        Task<Subject> AddAsync(Subject subject);

        Task<bool> DeleteAsync(int id);

        Task<Subject> UpdateAsync(Subject subject);
    }
}