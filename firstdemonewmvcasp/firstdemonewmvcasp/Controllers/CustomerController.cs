using firstdemonewmvcasp.Models;
using firstdemonewmvcasp.ViewModels;
using firstdemonewmvcasp.Views.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace firstdemonewmvcasp.Controllers
{
    public class CustomerController : Controller
    {

        private firstdemonewmvcaspContext _context;

        public CustomerController() 
        {
            _context = new firstdemonewmvcaspContext();
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
        //markup //dropdownlist
        public ActionResult New()
        {
            var membershiptypes = _context.MemberShipTypes.ToList();
            var viewModel = new NewCustomerViewModel
            {
                Customer = new Customer(),
                MemberShipTypes = membershiptypes
            };
            return View("New", viewModel);
        }
        //
        //ModelBinderAttribute-binding
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Save(Customer customer)
        {
            if(!ModelState.IsValid)
            {
                var viewModel = new NewCustomerViewModel 
                {
                    Customer = customer,
                    MemberShipTypes = _context.MemberShipTypes.ToList()
                };
                return View("New", viewModel);
            }
            if (customer.Cus_Id == 0) 
            {
                _context.Customers.Add(customer);

            }
            else 
            {
                var customerInDb = _context.Customers.Single(c => c.Cus_Id == customer.Cus_Id);

                customerInDb.Cus_Name = customer.Cus_Name;
                customerInDb.Birthdate = customer.Birthdate;
                customerInDb.MemberShipTypeId = customer.MemberShipTypeId;
                customerInDb.IsSubscribedToNews = customer.IsSubscribedToNews;

            }
            _context.SaveChanges();

            return RedirectToAction("Index", "Customer");
        }
        //
        //edit form
        public ActionResult Edit(int id)
        {
            var customers = _context.Customers.SingleOrDefault(c => c.Cus_Id == id);
            if (customers == null)
                return HttpNotFound();

            var viewModel = new NewCustomerViewModel
            {
                Customer = customers,
                MemberShipTypes = _context.MemberShipTypes.ToList()
        };
            return View("New", viewModel);
        }
        //
        // GET: Customer
        public ViewResult Index()
        {
            var customers = _context.Customers.Include( c => c.MemberShipTypes).ToList();
            

            return View(customers);
        }

        public ActionResult Details(int id) 
        {
            var customers =_context.Customers.SingleOrDefault(c => c.Cus_Id == id);

            if (customers == null)
                return HttpNotFound();

            return View(customers);
            
            
        }

       
    }
}