using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FirstCrudPoject.Models
{
    public class Ticket : Entity<int>
    {
        [Required]
        public string TicketHolderName { get; set; }

        [Required]
        public int Discount { get; set; }

        [ForeignKey("EventId")]
        public int EventId { get; set; }

        public Event Events { get; set; }
    }
}
