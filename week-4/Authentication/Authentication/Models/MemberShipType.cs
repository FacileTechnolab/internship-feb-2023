using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapp.Models
{
    public class MemberShipType
    {
        [Key]
        public int Id { get; set; }
        public short SignUpFee { get; set; }
        public byte DurationInMonths{ get; set; }
        public string DiscountRate { get; set;}
    }
}