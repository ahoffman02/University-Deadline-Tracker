using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}