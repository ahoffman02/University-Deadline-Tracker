using UDT.Repository;

namespace UDT.Business
{
    public class ItemBusiness
    {
        public string function()
        {
            return new ItemRepository().function();
        }
    }
}