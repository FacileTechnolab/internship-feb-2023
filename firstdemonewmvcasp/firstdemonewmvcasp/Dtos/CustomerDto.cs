using firstdemonewmvcasp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Xml.Linq;

namespace firstdemonewmvcasp.Dtos
{
    public class CustomerDto
    {
        [Key]
        public int Cus_Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Cus_Name { get; set; }

        //public int Cus_Salary { get; set; }
        //[Display(Name = "MemberShip Types")]
        public byte MemberShipTypeId { get; set; }

      
    
        //changing model
        public bool IsSubscribedToNewsletter { get; set; }
        //public bool IsSubscribedToNews { get; set; }

        //[ForeignKey("MemberShipTypeId")]
        //public MemberShipType MemberShipTypes { get; set; }

        //[Display(Name = "Date of Birth")]
        //[Min18YearsIfAMember]
        public DateTime? Birthdate { get; set; }
    }
}