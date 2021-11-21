using UDT.Model.Enums;

namespace UDT.Model.ViewModels
{
    public class BoardUpdateViewModel
    {
        public int TaskId { get; set; }
        public int UserId { get; set; }
        public TaskStatus Status { get; set; }
    }
}
