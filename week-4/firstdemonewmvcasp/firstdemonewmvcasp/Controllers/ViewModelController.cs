using firstdemonewmvcasp.Models;
using firstdemonewmvcasp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace firstdemonewmvcasp.Controllers
{
    public class ViewModelController : Controller
    {
        // GET: ViewModel
        public ActionResult Index()
        {
            List<Customer> customers = new List<Models.Customer>
            {
                new Customer { Cus_Id = 1, Cus_Name = "Dipali Kuhad",Cus_Salary = 2000},
                 new Customer { Cus_Id = 2, Cus_Name = "Krishika Maurya", Cus_Salary = 5000}
            };

            List<CustomerVM> custmvobj = new List<Models.CustomerVM>();
            foreach (Customer custobj in customers)
            {
                CustomerVM vmobj = new CustomerVM();
                vmobj.Cus_Name = custobj.Cus_Name; 
                vmobj.Cus_Salary = custobj.Cus_Salary;
                if(custobj.Cus_Salary > 2000)
                {
                    vmobj.Salary_Color = "blue";
                }
                else
                {
                    vmobj.Salary_Color = "black";
                }
                custmvobj.Add(vmobj);

            }
             return View("VmView", custmvobj);
            //return View("Index", customers);
        }

       
    }
}