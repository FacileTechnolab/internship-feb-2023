namespace FirstCrudPoject.Tickets.DTO
{
    public class CreateTicketInput
    {

        public string TicketHolderName { get; set; }
        public int Discount { get; set; }
        public int EventId { get; set; }
    }
}
