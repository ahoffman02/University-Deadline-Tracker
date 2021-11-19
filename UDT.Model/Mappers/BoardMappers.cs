using UDT.Model.Entities;
using UDT.Model.ViewModels;

namespace UDT.Model.Mappers
{
    public static class BoardMappers
    {
        public static Board ToEntity(this BoardViewModel boardViewModel)
        {
            var board = new Board
            {
                Id = boardViewModel.Id,
                TaskId = boardViewModel.TaskId,
                UserId = boardViewModel.UserId,
                Status = boardViewModel.Status
            };

            return board;
        }

        public static BoardViewModel ToViewModel(this Board board)
        {
            var boardViewModel = new BoardViewModel
            {
                Id = board.Id,
                TaskId = board.TaskId,
                UserId = board.UserId,
                Status = board.Status
            };

            return boardViewModel;
        }

        public static Board ToEntity(this BoardCreationViewModel boardCreationViewModel)
        {
            var board = new Board
            {
                TaskId = boardCreationViewModel.TaskId,
                UserId = boardCreationViewModel.UserId,
                Status = boardCreationViewModel.Status
            };

            return board;
        }
        
        public static Board ToEntity(this BoardUpdateViewModel boardUpdateViewModel)
        {
            var board = new Board
            {
                TaskId = boardUpdateViewModel.TaskId,
                UserId = boardUpdateViewModel.UserId,
                Status = boardUpdateViewModel.Status
            };

            return board;
        }
    }
}
