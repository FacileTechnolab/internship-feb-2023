using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Test.Migrations;
using Test.Models;
using Customer = Test.Models.Customer;

namespace Test.ViewModels
{
    public class NewCustomerViewModel
    {
        public IEnumerable<MembershipType> MembershipTypes { get; set; }
        public Customer Customer{ get; set; }
    }
}  