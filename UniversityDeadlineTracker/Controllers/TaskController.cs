using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UDT.Model.Entities;
using UDT.Business.Task;

namespace UniversityDeadlineTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly IServiceTask _taskService;

        private readonly ILogger<TaskController> _logger;

        public TaskController(ILogger<TaskController> logger, IServiceTask taskService)
        {
            _logger = logger;
            _taskService = taskService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_taskService.GetAll());
        }

        [HttpPost]
        public async Task<IActionResult> AddTask([FromBody] TaskDto taskDto)
        {
            var dbTask = await _taskService.AddTask(taskDto);
            return Created(string.Empty, dbTask);
        }

        [HttpDelete("{taskId:int}")]
        public async Task<IActionResult> DeleteTask([FromRoute] int taskId)
        {
            await _taskService.DeleteTask(taskId);
            return NoContent();
        }
    }
}