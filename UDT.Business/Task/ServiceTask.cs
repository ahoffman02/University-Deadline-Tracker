using System;
using System.Collections.Generic;
using System.Text;
using UDT.Repository;
using UDT.Model.Entities;
using System.Threading.Tasks;
using System.Linq;

namespace UDT.Business.Task
{
    public class ServiceTask : IServiceTask
    {
        private readonly DataContext _dbContext;

        public ServiceTask(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Model.Entities.Task> AddTask(TaskDto taskDto)
        {
            var task = taskDto.ToTask();
            await _dbContext.Tasks.AddAsync(task);
            await _dbContext.SaveChangesAsync();
            return task;
        }

        public async System.Threading.Tasks.Task DeleteTask(int taskId)
        {
            var task = _dbContext.Tasks.Where(task => task.Id == taskId).Single();
            _dbContext.Tasks.Remove(task);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<TaskDto> EditTask(TaskDto taskDto)
        {
            var task = taskDto.ToTask();
            _dbContext.Tasks.Update(task);
            await _dbContext.SaveChangesAsync();
            return taskDto;
        }

        public IAsyncEnumerable<Model.Entities.Task> GetAll()
        {
            return _dbContext.Tasks.AsAsyncEnumerable();
        }
    }
}
