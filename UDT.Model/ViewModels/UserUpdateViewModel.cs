using System;
using System.Collections.Generic;
using System.Text;
using UDT.Model.Enums;

namespace UDT.Model.ViewModels
{
    public class UserUpdateViewModel
    {
        public string Name { get; set; }
        public int GroupId { set; get; }
        public string Email { get; set; }
        public UserRole Role { get; set; }
        public int? Code { get; set; }
    }
}
