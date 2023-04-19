using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers.API
{
    public class NewRentalsController : Controller
    {
        private ApplicationDbContext _context;
        // GET: NewRentals
        [System.Web.Http.HttpPost]
        public IHttpActionResult CreateNewRentals(NewRentalDto newRental)
        {
            var customer = _context.Customers.Single(c => c.Id == newRental.CustomerId);
            var rental = new Rental
            {
                Customer = customer,
                DateRented = DateTime.Now
            };
            _context.Rentals.Add(rental);
            //throw new NotImplementedException();
            _context.SaveChanges();
            return Ok();
            
        }


    }
}