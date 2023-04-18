using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapp.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        [Required(ErrorMessage ="please enter the Employee name .")]
        [StringLength(255)]
        [Display(Name ="name of Employee")]
        public string name { get; set; }
        public string Addess { get; set; }
        [Display(Name="Date of Birth")]
        [Minimum18YearsIfaMember]
        public DateTime? Birthdate { get; set; }
        public bool IsSubscribedToNewsletter { get; set; }
      
        public MemberShipType MemberShipType { get; set; }
        public int MemberShipTypeId { get; set; }

    }
}