using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Webapp.Models;

namespace Webapp.viewModel
{
    public class NewEmployeeViewModel
    {
        public IEnumerable<MemberShipType> MemberShipTypes { get; set; }
        public Employee Employee { get; set; }
    }
}