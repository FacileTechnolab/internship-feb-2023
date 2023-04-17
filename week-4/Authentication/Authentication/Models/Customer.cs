using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Webapp.Models
{
        public class Customer
    {
        [Key]
        public int Customer_Id { get; set; }
        [Required(ErrorMessage ="name is must required.")]
        [StringLength(255)]

        public string Customer_Name { get; set; }

        public string Customer_salary{ get; set; }
    }
}