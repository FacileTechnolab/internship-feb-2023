using Authentication.Models;
using Authentication.viewModel;
using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Authentication.Controllers
{
    public class PartialviewController : Controller
    {
        // GET: Partialview
        private IdentityDbContext _context;
        public PartialviewController()
        {
            _context = new IdentityDbContext();
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
        //[Authorize(Roles = "CanManageEmployee")]
        public ActionResult New()
        {
            var membershiptypes = _context.MemberShipTypes.ToList();
            var viewModel = new NewEmployeeViewModel
            {
                Employee = new Employee(),
                MemberShipTypes = membershiptypes
            };
            return View("New", viewModel);
        }

        [HttpPost]
        public ActionResult Save(Employee Employee)
        {
            if (!ModelState.IsValid)
            {
                var viewModel = new NewEmployeeViewModel
                {
                    Employee = Employee,
                    MemberShipTypes = _context.MemberShipTypes.ToList()
                };
                return View("New", viewModel);
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
            return RedirectToAction("Index", "Partialview");
        }
        [Authorize]
        public ActionResult List()
        {
            var Employee = _context.Employees.Include(P => P.MemberShipType).ToList();
            //return View(Employee);
            if (User.IsInRole("CanManageEmployee"))
                return View("List");
            return View("Read-Only", Employee);
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