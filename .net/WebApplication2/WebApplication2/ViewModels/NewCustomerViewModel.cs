using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Migrations;
using WebApplication2.Models;
using Customer = WebApplication2.Models.Customer;

namespace WebApplication2.ViewModels
{
    public class NewCustomerViewModel
    {
        public IEnumerable<MembershipType> MembershipTypes { get; set; }
        public Customer Customer{ get; set; }
    }
}  