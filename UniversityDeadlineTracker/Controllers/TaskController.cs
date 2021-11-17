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
        public async Task<IActionResult> AddTask([FromBody] UDT.Model.Entities.Task task)
        {
            var dbTask = await _taskService.AddTask(task);
            return Created(string.Empty, dbTask);
        }
    }
}