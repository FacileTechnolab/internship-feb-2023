using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class NewRentalDto
    {
        public int CustomerId { get; set; }
        public DateTime DateRented { get; set; }
        public DateTime DateReturned { get; set; }
        public Customer Customer { get; set; }
        //public List<Movie> Movies { get; set; }
    }
}