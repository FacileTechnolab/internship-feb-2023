using System;

namespace FirstCrudPoject.Events.DTO
{
    public class CreateEventInput
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime EventDate { get; set; }
        public int EntryFees { get; set; }
    }
}
