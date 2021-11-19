using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UDT.Business.Interfaces;
using UDT.Model.Entities;
using UDT.Repository;

namespace UDT.Business.Implementation
{
    public class BoardService : IBoardService
    {
        private readonly DataContext _dataContext;

        public BoardService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IAsyncEnumerable<Board> GetAllAsync()
        {
            return _dataContext.Board.AsAsyncEnumerable();
        }

        public async Task<Board> GetByIdAsync(int boardId)
        {
            return await _dataContext.Board
                .FirstOrDefaultAsync(board => board.Id == boardId);
        }

        public async Task<Board> AddAsync(Board board)
        {
            await _dataContext.Board.AddAsync(board);
            await _dataContext.SaveChangesAsync();

            return board;
        }

        public async Task<bool> DeleteAsync(int boardId)
        {
            var existingBoard = await _dataContext.Board
                .FirstOrDefaultAsync(board => board.Id == boardId);

            if (existingBoard == null)
            {
                return false;
            }
            
            _dataContext.Board.Remove(existingBoard);
            await _dataContext.SaveChangesAsync();
            
            return true;
        }

        public async Task<Board> UpdateAsync(Board newBoard)
        {
            var existingBoard = await _dataContext.Board
                .FirstOrDefaultAsync(board => board.Id == newBoard.Id);

            if (existingBoard == null)
            {
                return null;
            }

            existingBoard.TaskId = newBoard.TaskId;
            existingBoard.UserId = newBoard.UserId;
            existingBoard.Status = newBoard.Status;
            
            await _dataContext.SaveChangesAsync();

            return existingBoard;
        }
    }
}
