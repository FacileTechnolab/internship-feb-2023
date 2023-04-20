using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Customer
    {
        internal static int MembershipTypedId;

        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
       
        public string Name { get; set; }
        
        [Display(Name = "Date of Birth")]
        //[Min18Year]
        public DateTime? Birthdate { get; set; }
        
        public bool IsSubscribedToNewsletter { get; set; }
       
        public virtual MembershipType MembershipType { get; set; }

        [Display(Name = "Membership Type")]
       
        public byte MembershipTypeId { get; set; }


    }
} 