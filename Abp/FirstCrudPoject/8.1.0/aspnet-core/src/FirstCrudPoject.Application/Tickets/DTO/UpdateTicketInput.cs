namespace FirstCrudPoject.Tickets.DTO
{
    public class UpdateTicketInput
    {

        public int Id { get; set; }
        public string TicketHolderName { get; set; }
        public int Discount { get; set; }
        public int EventId { get; set; }
    }
}
