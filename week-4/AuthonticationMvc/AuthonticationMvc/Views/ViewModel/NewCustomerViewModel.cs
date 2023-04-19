
using AuthonticationMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AuthonticationMvc.Views.ViewModel
{
    public class NewCustomerViewModel
    {
        public List<MemberShipType> MemberShipTypes { get; set; }
        public Customer Customer { get; set; }
    }
}