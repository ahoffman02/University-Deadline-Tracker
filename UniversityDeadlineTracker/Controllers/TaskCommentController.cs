using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UDT.Business.Interfaces;
using UDT.Model.Mappers;
using UDT.Model.ViewModels;
using UniversityDeadlineTracker.Filters;

namespace UniversityDeadlineTracker.Controllers
{
    [ApiController]
    [Route("api/task-comments")]
    [AuthorizationFilter]
    public class TaskCommentController : ControllerBase
    {
        private readonly ITaskCommentService _taskCommentService;
        private readonly IAuthorizationHelper _authorizationHelper;

        public TaskCommentController(
            ITaskCommentService taskCommentService,
            IAuthorizationHelper authorizationHelper)
        {
            _taskCommentService = taskCommentService;
            _authorizationHelper = authorizationHelper;
        }

        [HttpGet]
        [Route("{id:int}")]
        [AuthorizationFilter]
        public async Task<IActionResult> GetByIdAsync(
            [FromRoute] int id, [FromHeader] string authorization)
        {
            var taskComment = await _taskCommentService.GetByIdAsync(id);

            if (taskComment == null)
                return NotFound();

            var userIdFromToken = _authorizationHelper.ExtractUserIdFromToken(authorization.Split(" ")[1]);
            if (userIdFromToken != taskComment.ReceiverId && userIdFromToken != taskComment.SenderId)
                return Unauthorized();

            return Ok(taskComment.toViewModel());
        }

        [HttpGet]
        [Route("tasks/{taskId}/users/{userId}")]
        [AuthorizationFilter]
        public async Task<IActionResult> GetByTaskAndUserAsync(
            [FromRoute] int taskId, [FromRoute] int userId, [FromHeader] string authorization)
        {
            var userIdFromToken = _authorizationHelper.ExtractUserIdFromToken(authorization.Split(" ")[1]);
            if (userIdFromToken != userId && userIdFromToken != userId)
                return Unauthorized();

            return Ok(
                (await _taskCommentService.GetByTaskAndUserAsync(taskId, userId))
                    .Select(user => user.toViewModel())
            );
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync([FromHeader] string authorization,
            [FromBody] TaskCommentCreationViewModel taskCommentCreationViewModel)
        {
            var taskComment = taskCommentCreationViewModel.toEntity();

            var userIdFromToken = _authorizationHelper.ExtractUserIdFromToken(authorization.Split(" ")[1]);
            if (userIdFromToken != taskComment.SenderId)
                return Unauthorized();

            return Ok(
                (await _taskCommentService.AddAsync(taskComment)).toViewModel()
            );
        }

        [HttpPut]
        [Route("{id:int}")]
        [AuthorizationFilter]
        public async Task<IActionResult> UpdateAsync([FromRoute] int id, [FromHeader] string authorization,
            [FromBody] TaskCommentUpdateViewModel taskCommentUpdateViewModel)
        {
            var taskComment = taskCommentUpdateViewModel.toEntity();
            taskComment.Id = id;

            var userIdFromToken = _authorizationHelper.ExtractUserIdFromToken(authorization.Split(" ")[1]);
            var comment = await _taskCommentService.GetByIdAsync(id);
            if (comment == null)
                return NotFound();

            if (userIdFromToken != comment.SenderId)
                return Unauthorized();

            taskComment = await _taskCommentService.UpdateAsync(taskComment);

            if (taskComment == null)
                return NotFound();

            return Ok(taskComment.toViewModel());
        }

        [HttpDelete]
        [Route("{id:int}")]
        [AuthorizationFilter]
        public async Task<IActionResult> DeleteAsync([FromRoute] int id, [FromHeader] string authorization)
        {
            var userIdFromToken = _authorizationHelper.ExtractUserIdFromToken(authorization.Split(" ")[1]);
            var comment = await _taskCommentService.GetByIdAsync(id);
            if (comment == null)
                return NotFound();

            if (userIdFromToken != comment.SenderId)
                return Unauthorized();

            return Ok(await _taskCommentService.DeleteAsync(id));
        }
    }
}