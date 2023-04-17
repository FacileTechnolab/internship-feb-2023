using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Webapp.Models;
using Webapp.viewModel;

namespace Webapp.Controllers
{
    public class PartialviewController : Controller
    {
        // GET: Partialview
        private AppDataContext _context;
        public PartialviewController()
        {
            _context = new AppDataContext();
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
        public ActionResult New()
            {
            var membershiptypes = _context.MemberShipTypes.ToList();
            var viewModel = new NewEmployeeViewModel
            {
                Employee = new Employee(),
                MemberShipTypes = membershiptypes
            };
                return View("New",viewModel);
            }

        [HttpPost]
        public ActionResult Save(Employee Employee)
        {   
            if(!ModelState.IsValid)
            {
                var viewModel = new NewEmployeeViewModel
                {
                    Employee = Employee,
                    MemberShipTypes = _context.MemberShipTypes.ToList()
                };
                return View("New",viewModel);
            }
            if (Employee.EmployeeId == 0)
                _context.Employees.Add(Employee);

            else
            {
                var EmployeeInDb = _context.Employees.Single(c => c.EmployeeId == Employee.EmployeeId);
                EmployeeInDb.EmployeeId = Employee.EmployeeId;
                EmployeeInDb.name = Employee.name;
                EmployeeInDb.Addess = Employee.Addess;
                EmployeeInDb.MemberShipTypeId = Employee.MemberShipTypeId;
                EmployeeInDb.IsSubscribedToNewsletter = Employee.IsSubscribedToNewsletter;

            }
            _context.SaveChanges();
            return RedirectToAction("Index","Partialview");
        }
        public ActionResult Index()
        {
            var Employee = _context.Employees.Include(P => P.MemberShipType).ToList();
            return View(Employee);
        }
        public ActionResult Detail(int id)
        {
            var Employee = _context.Employees.SingleOrDefault(P => P.EmployeeId == id);
            if (Employee == null)
                return HttpNotFound();

            return View(Employee);

        }
     
 
        public ActionResult Edit(int id)
        {
            var Employee = _context.Employees.SingleOrDefault(x => x.EmployeeId == id);
            if (Employee == null)
                return HttpNotFound();
            var viewModel = new NewEmployeeViewModel

            {
                Employee = Employee,
                MemberShipTypes = _context.MemberShipTypes.ToList()
            };
             
            return View("New", viewModel);
        }
       
    }
  
}