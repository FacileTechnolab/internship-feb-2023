using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Webapp.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        
        public string Employeeprofile(int id)
        {
            string profile = string.Empty;
            if (id == 1)
            {

                profile = "employee 1 profile";

            }
           else if (id == 2)
            {
                profile = "employee 1 profile";

            }
            else
            {
                profile = "no record avilable ";

            }
            return profile;

        }
        public ActionResult Index()
        { 
            return View();
        }

    }
}