using System;
using System.Collections.Generic;
using System.Text;
using UDT.Repository;
using UDT.Model.Entities;
using System.Threading.Tasks;

namespace UDT.Business.Task
{
    public interface IServiceTask
    {
        public IAsyncEnumerable<UDT.Model.Entities.Task> GetAll();
        public Task<UDT.Model.Entities.Task> AddTask(TaskDto taskDto);
        public System.Threading.Tasks.Task DeleteTask(int taskId);
    }
}
