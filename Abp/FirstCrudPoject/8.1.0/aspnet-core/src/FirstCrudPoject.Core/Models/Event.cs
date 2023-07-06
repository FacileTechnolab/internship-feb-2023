using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstCrudPoject.Models
{
    public class Event:Entity<int>
    {
        [Required]
        [StringLength(45,ErrorMessage = "Maximum length is 45")]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime EventDate { get; set; }

        [Required]
        public int EntryFees { get; set; }    
    }
}
