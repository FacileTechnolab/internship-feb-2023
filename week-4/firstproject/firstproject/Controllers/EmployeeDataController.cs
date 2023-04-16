using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace firstproject.Controllers
{
    public class EmployeeDataController : Controller
    {
        // GET: EmployeeData
        public ActionResult Index()
        {
            var details = new List<Employee>
            {
                new Employee{Emp_id=9,Emp_name="shivangi",Emp_location="ahmedabad" },

                new Employee{Emp_id=9,Emp_name="shivangi",Emp_location="ahmedabad" },

                new Employee{Emp_id=9,Emp_name="shivangi",Emp_location="ahmedabad" },

                new Employee{Emp_id=9,Emp_name="shivangi",Emp_location="ahmedabad" }
            };

            var viewmodel = new Random
            {
                Employees= details
            };
            return View(details);
        }
    }
}