using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Dto;
using WebApplication1.Models;

namespace WebApplication1.Controllers.API
{
    public class CustomersController : ApiController
    {
        private ApplicationDbContext _context;
        public CustomersController()
        {
            _context = new ApplicationDbContext();

        }
        //Get/Api/customers
        public  IEnumerable<CustomerDto> GetCustomers()
        {
            return _context.Customers.ToList().Select(Mapper.Map<Customer, CustomerDto>);
        }
        //get//Api//Customers/1
        public IHttpActionResult GetCustomers(int id)
        {
            var customer = _context.Customers.FirstOrDefault(c => c.Id == id);
            if (customer == null)
               //throw new HttpResponseException(HttpStatusCode.NotFound);
                return NotFound();
            //return Mapper.Map<Customer, CustomerDto>(customer) ;
            return Ok(Mapper.Map<Customer,CustomerDto>(customer));
        }
        //post/api//customers
        [HttpPost]
        public IHttpActionResult CreateCustomers(CustomerDto customer)
        {
            if (!ModelState.IsValid)
                //throw new HttpResponseException(HttpStatusCode.BadRequest);
                return BadRequest();
            var customers = Mapper.Map<CustomerDto, Customer>(customer);
            _context.Customers.Add(customers);
            _context.SaveChanges();
            customer.Id = customers.Id;
            //return customer;
            return Created(new Uri(Request.RequestUri + "/" + customers.Id),customer);
        }
        //put//api//customers/1 
        [HttpPut]
        public void UpdateCustomer(int id, CustomerDto customer)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            var customerInDb = _context.Customers.SingleOrDefault(c => c.Id == id);
            if(customerInDb == null)    
                throw new HttpResponseException(HttpStatusCode.NotFound); 
            var d = Mapper.Map(customer, customerInDb);

            //customerInDb.Name = customer.Name;
            //customerInDb.Birthdate= customer.Birthdate;
            //customerInDb.IsSubscribedToNewsletter = customer.IsSubscribedToNewsletter;
            //customerInDb.MembershipTypeId = customer.MembershipTypeId;
            _context.SaveChanges();
        }
        //delete/api/customers/1
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
