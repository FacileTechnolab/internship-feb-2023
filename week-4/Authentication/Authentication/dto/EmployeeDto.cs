using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Authentication.dto
{
    public class EmployeeDto
    {

        public int EmployeeId { get; set; }
        [Required]
        [StringLength(255)]

        public string name { get; set; }

        // [Minimum18YearsIfaMember]
        public DateTime? Birthdate { get; set; }
        public bool IsSubscribedToNewsletter { get; set; }

        public int MemberShipTypeId { get; set; }
    }
}