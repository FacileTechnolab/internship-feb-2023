using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using WebApplication2.Models;

namespace WebApplication2.Dto
{
    public class CustomerDto
    {
      

            public int Id { get; set; }
            [Required]
            [StringLength(255)]
            public string Name { get; set; }

         
          //  [Min18Year]
            public DateTime? Birthdate { get; set; }

            public bool IsSubscribedToNewsletter { get; set; }

            
            public byte MembershipTypeId { get; set; }

    }
}