 using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Rental 
    {
        public int Id { get; set; }
        [Required]
        public Customer Customer { get; set; }

       public Movie Movie { get; set; }     
        
        public DateTime DateRented { get; set; }
        public DateTime DateReturned { get; set; }
    }
}

