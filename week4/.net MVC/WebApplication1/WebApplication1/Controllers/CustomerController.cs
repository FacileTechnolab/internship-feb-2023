using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;
using System.Net;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class CustomerController : Controller
    { 
        
        // GET: Custom
        private ApplicationDbContext _context;
        public CustomerController()
        { 
            _context = new ApplicationDbContext();  
        }
        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }
        [ValidateAntiForgeryToken]
        [System.Web.Http.HttpPost]
        public ActionResult Save(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                var viewModel = new NewCustomerViewModel 
                { 
                    Customer = customer,
                    MembershipTypes = _context.MembershipTypes.ToList()
                };
                return View("New" , viewModel);
            }
            if(customer.Id==0)
                  _context.Customers.Add(customer);
            else
            {
                var customerInDb = _context.Customers.Single(c => c.Id == customer.Id);
                customerInDb.Name = customer.Name;
                customerInDb.Birthdate = customer.Birthdate;
                customerInDb.MembershipTypeId = customer.MembershipTypeId;
                customerInDb.IsSubscribedToNewsletter = customer.IsSubscribedToNewsletter;

            }
            _context.SaveChanges();

            return RedirectToAction("Index","Customers"); 
        }  
            

        public ActionResult New()
        {
            var membershipTypes = _context.MembershipTypes.ToList();
            var ViewModel =  new NewCustomerViewModel
            { 
                Customer = new Customer(),
                MembershipTypes = membershipTypes
            };
            return View(ViewModel);
        }
        //[OutputCache(Duration =0/*Location =OutputCacheLocation.Server*/,VaryByParam ="*")]
        public ViewResult Index()
        {
           var customers = _context.Customers.Include(c => c.MembershipType).ToList();
            return View(customers);
           // return View();


        }
        public ActionResult Details(int id) {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id); 
            if(customer == null)
            
                return HttpNotFound();
                
            
            return View(customer);  
        }
        public ActionResult Edit(int id) {
            var customer =  (_context.Customers.SingleOrDefault(c => c.Id == id));
            if(customer == null)
                return HttpNotFound(); 

            var viewModel = new NewCustomerViewModel
            {
                    Customer = customer, 
             MembershipTypes = _context.MembershipTypes.ToList()
            };
            return View("New",viewModel);
        }

       
        public void DeleteCustomer(int id)
        {
            var customerInDb = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customerInDb == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            _context.Customers.Remove(customerInDb);
            _context.SaveChanges();
        }
    }
}