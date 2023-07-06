using System;

namespace FirstCrudPoject.Events.DTO
{
    public class GetEventOutput
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime EventDate { get; set; }
        public int EntryFees { get; set; }
    }
}
