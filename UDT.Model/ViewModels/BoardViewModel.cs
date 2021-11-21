using UDT.Model.Enums;

namespace UDT.Model.ViewModels
{
    public class BoardViewModel
    {
        public int Id { get; set; }
        public int TaskId { get; set; }
        public int UserId { get; set; }
        public TaskStatus Status { get; set; }
    }
}
