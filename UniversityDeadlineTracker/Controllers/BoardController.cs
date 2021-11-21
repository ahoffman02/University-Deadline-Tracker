using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UDT.Business.Interfaces;
using UDT.Model.Mappers;
using UDT.Model.ViewModels;

namespace UniversityDeadlineTracker.Controllers
{
    [ApiController]
    [Route("api/board")]
    public class BoardController : ControllerBase
    {
        private readonly IBoardService _boardService;

        public BoardController(IBoardService boardService)
        {
            _boardService = boardService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_boardService.GetAllAsync().Select(board => board.ToViewModel()));
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var board = await _boardService.GetByIdAsync(id);

            if (board == null) return NotFound();

            return Ok(board.ToViewModel());
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] BoardCreationViewModel boardCreationViewModel)
        {
            return Ok(
                (await _boardService.AddAsync(
                    boardCreationViewModel.ToEntity())
                ).ToViewModel()
            );
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _boardService.DeleteAsync(id);

            if (!result) return NotFound(false);

            return Ok(true);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateBoard([FromRoute] int id,
            [FromBody] BoardUpdateViewModel boardUpdateViewModel)
        {
            var board = boardUpdateViewModel.ToEntity();
            board.Id = id;

            board = await _boardService.UpdateAsync(board);

            if (board == null) return NotFound();

            return Ok(board.ToViewModel());
        }
    }
}