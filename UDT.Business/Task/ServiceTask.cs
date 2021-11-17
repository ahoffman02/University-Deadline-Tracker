using System;
using System.Collections.Generic;
using System.Text;
using UDT.Repository;
using UDT.Model.Entities;

namespace UDT.Business.Task
{
    class ServiceTask : IServiceTask
    {
        private readonly DataContext _dbContext;

        public ServiceTask(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IAsyncEnumerable<Model.Entities.Task> GetAll()
        {
            return _dbContext.Tasks.AsAsyncEnumerable();
        }
    }
}
