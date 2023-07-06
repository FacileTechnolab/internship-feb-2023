namespace FirstCrudPoject.Tickets.DTO
{
    public class GetTicketOutput
    {
        public int id { get; set; }
        public string TicketHolderName { get; set; }
        public int Discount { get; set; }
        public int EventId { get; set; }
    }
}
