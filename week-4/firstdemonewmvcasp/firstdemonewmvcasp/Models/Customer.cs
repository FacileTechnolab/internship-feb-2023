using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace firstdemonewmvcasp.Models
{
    public class Customer
    {
        [Key]
        public int Cus_Id { get; set; }
        
        public string Cus_Name { get; set; }
       
        public int Cus_Salary { get; set; }

        [Required]
        [StringLength(255)]

        //changing model
        public string IsSubscribedToNewsletter{ get; set;}
        public MemberShipType MemberShipType { get; set; }

    
       
    }
    public class CustomerVM
    {

        public string Cus_Name { get; set; }
        public int Cus_Salary { get; set; }
        public string Salary_Color{ get; set; }
    }
   
}