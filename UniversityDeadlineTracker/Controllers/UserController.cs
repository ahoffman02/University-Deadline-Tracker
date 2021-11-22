using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using UDT.Business.Interfaces;
using UDT.Model.Entities;
using UDT.Model.ViewModels;
using UDT.Model.Mappers;
using System.Linq;

namespace UniversityDeadlineTracker.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            return Ok(
                (await _userService.GetByIDAsync(id)).toViewModel()
            );
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(
                (await _userService.GetAllAsync()).Select(user => user.toViewModel())
            );
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] UserCreationViewModel userCreationViewModel)
        {
            return Ok(
                (await _userService.AddAsync(
                    userCreationViewModel.toEntity())
                ).toViewModel()
            );
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UserUpdateViewModel userUpdateViewModel)
        {
            User user = userUpdateViewModel.toEntity();
            user.Id = id;

            return Ok(
                (await _userService.UpdateAsync(user)).toViewModel()
            );
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            return Ok(await _userService.DeleteAsync(id));
        }

    }
}
