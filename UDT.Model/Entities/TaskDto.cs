using System;
using System.Collections.Generic;
using System.Text;

namespace UDT.Model.Entities
{
    public class TaskDto
    {
        public string Id { get; set; }
        public string Title { set; get; }
        public string Description { set; get; }
        public string Subject { set; get; }
        public string GroupName { set; get; }
        public string Deadline { set; get; }

        public Task ToTask()
        {
            return new Task{
                Id = int.Parse(Id),
                Title = Title, 
                Description = Description, 
                Subject = Subject,
                GroupName = GroupName,
                Deadline = DateTime.Parse(Deadline)
                };
        }
    }
}
