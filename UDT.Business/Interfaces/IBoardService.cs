using System.Collections.Generic;
using System.Threading.Tasks;
using UDT.Model.Entities;

namespace UDT.Business.Interfaces
{
    public interface IBoardService
    {
        IAsyncEnumerable<Board> GetAllAsync();
        Task<Board> GetByIdAsync(int boardId);
        Task<Board> AddAsync(Board board);
        Task<bool> DeleteAsync(int boardId);
        Task<Board> UpdateAsync(Board board);
    }
}