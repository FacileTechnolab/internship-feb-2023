using AutoMapper;
using firstdemonewmvcasp.Dtos;
using firstdemonewmvcasp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace firstdemonewmvcasp.Controllers.Api
{
    public class CustomersController : ApiController
    {
        private firstdemonewmvcaspContext _context;

        public CustomersController()
        {
            _context = new firstdemonewmvcaspContext();
        }
        //GET / Api/customers
        public IEnumerable<CustomerDto> GetCustomers() 
        {
            return _context.Customers.ToList().Select(Mapper.Map < Customer, CustomerDto>);


        }

        //GET / Api/customers/1
        public IHttpActionResult GetCustomer(int id)
        {
            var Customer = _context.Customers.SingleOrDefault(c => c.Cus_Id == id);

            if (Customer == null)
                return NotFound();

            return Ok(Mapper.Map<Customer, CustomerDto>(Customer));
        }

        //POST / Api/customers
        [System.Web.Http.HttpPost]
        public IHttpActionResult CreateCustomer(CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                   return BadRequest();
                

            

            var customer = Mapper.Map<CustomerDto, Customer>(customerDto);
            _context.Customers.Add(customer);
            _context.SaveChanges();

            customerDto.Cus_Id = customer.Cus_Id;

            return Created(new Uri(Request.RequestUri + "/" + customer.Cus_Id),customerDto);
        }

        //PUT / Api/customers/1
        [System.Web.Http.HttpPut]
        public void UpdateCustomer(int id, CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            var customerInDb = _context.Customers.SingleOrDefault(c => c.Cus_Id == id);

            if(customerInDb == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            Mapper.Map(customerDto, customerInDb);
          

            _context.SaveChanges();
        }

        //DELETE / Api/customers/1
        [System.Web.Http.HttpDelete]
        public void DeleteCustomer(int id)
        {
            var customerInDb = _context.Customers.SingleOrDefault(c => c.Cus_Id == id);

            if (customerInDb == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            _context.Customers.Remove(customerInDb);
            _context.SaveChanges();



        }
    }
}
