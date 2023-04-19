using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using MvcAuthontication.Models;

namespace MvcAuthontication.Models
{
    public class Customer
    {
        [Key]
        public int Cus_Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Cus_Name { get; set; }

        public int Cus_Salary { get; set; }
        [Display(Name = "MemberShip Types")]
        public byte MemberShipTypeId { get; set; }

        [Required]
     
        //changing model
        public string IsSubscribedToNewsletter { get; set; }
        public bool IsSubscribedToNews { get; set; }

        [ForeignKey("MemberShipTypeId")]
        public MemberShipType MemberShipTypes { get; set; }

        [Display(Name = "Date of Birth")]
        //[Min18YearsIfAMember]
        public DateTime? Birthdate { get; set; }


    }
   

}