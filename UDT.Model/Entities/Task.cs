using System;
using System.Collections.Generic;
using System.Text;

namespace UDT.Model.Entities
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { set; get; }
        public string Description { set; get; }
        public string Subject { set; get; }
        public string GroupName { set; get; }
        public DateTime Deadline { set; get; }
    }
}
