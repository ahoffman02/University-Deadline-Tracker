﻿using System;
using System.Collections.Generic;
using System.Text;

namespace UDT.Model.ViewModels
{
    public class TaskCreationViewModel
    {
        public string Title { set; get; }
        public string Description { set; get; }
        public string Subject { set; get; }
        public string GroupName { set; get; }
        public DateTime Deadline { set; get; }
    }
}
