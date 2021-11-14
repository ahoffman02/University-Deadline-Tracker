using System;
using System.Collections.Generic;
using System.Text;
using UDT.Model.Enums;

namespace UDT.Model.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GroupId { set; get; }
        public Group Group { get; set; }
        public string Email { get; set; }
        public UserRole Role { get; set; }
        public int? Code { get; set; }
    }
}
