using Authentication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Authentication.viewModel
{
    public class NewEmployeeViewModel
    {

        public IEnumerable<MemberShipType> MemberShipTypes { get; set; }
        public Employee Employee { get; set; }
    }
}