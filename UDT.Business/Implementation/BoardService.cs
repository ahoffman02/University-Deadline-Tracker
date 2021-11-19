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

        public async Task<List<Board>> GetAllAsync()
        {
            return await _dataContext.Board.ToListAsync();
        }

        public async Task<Board> GetByIdAsync(int boardId)
        {
            return await _dataContext.Board.FindAsync(boardId);
        }

        public async Task<Board> AddAsync(Board board)
        {
            await _dataContext.Board.AddAsync(board);
            await _dataContext.SaveChangesAsync();

            return board;
        }

        public async Task<bool> DeleteAsync(int boardId)
        {
            var board = await _dataContext.Board.FindAsync(boardId);
            
            if (board == null)
            {
                return false;
            }
            
            _dataContext.Board.Remove(board);
            await _dataContext.SaveChangesAsync();
            
            return true;
        }

        public async Task<Board> UpdateAsync(Board newBoard)
        {
            var board = await _dataContext.Board.FindAsync(newBoard.Id);

            if (board == null)
            {
                return null;
            }

            board.TaskId = newBoard.TaskId;
            board.UserId = newBoard.UserId;
            board.Status = newBoard.Status;
            
            await _dataContext.SaveChangesAsync();

            return board;
        }
    }
}
