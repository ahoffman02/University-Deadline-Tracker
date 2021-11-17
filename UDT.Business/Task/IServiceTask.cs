using System;
using System.Collections.Generic;
using System.Text;
using UDT.Repository;
using UDT.Model.Entities;

namespace UDT.Business.Task
{
    public interface IServiceTask
    {
        public IAsyncEnumerable<UDT.Model.Entities.Task> GetAll();
    }
}
