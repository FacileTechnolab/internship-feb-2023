using firstdemonewmvcasp.Models;
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
        // GET: Customer
        public ViewResult Index()
        {
            var customers = _context.Customers.Include(c => c.MemberShipType).ToList();
            

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