using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Routing;
using AutoMapper;
using WebApplication2.Dto;
using WebApplication2.Models;

namespace WebApplication2.Controllers.API
{
    public class CustomersController : ApiController
    {
        private AppDbContext _context;

        public CustomersController()
        {
            _context = new AppDbContext();

        }

        //GET/api/customers
        [HttpGet]
        public IEnumerable<CustomerDto> GetCustomers()
        {
            return _context.Customers.ToList().Select(Mapper.Map<Customer, CustomerDto>);

        }

        //GET/api/customers/1
        public CustomerDto GetCustomer(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customer == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return Mapper.Map<Customer, CustomerDto>(customer);
        }

        //public CustomerDto CreateCustomer(CustomerDto customer)
        //{
        //    return Mapper.Map<Customer, CustomerDto>(customer);
        //}

        //POST/api/customers
        [HttpPost]
        public IHttpActionResult CreateCustomer(CustomerDto customer, CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();


            var Customer = Mapper.Map<CustomerDto, Customer>(customerDto);
            _context.Customers.Add(Customer);
            _context.SaveChanges();
            customerDto.Id = customerDto.Id;
            return Created(new Uri(Request.RequestUri + "/" + customer.Id), customerDto);
        }

        //PUT/api/customers/1
        public void UpdateCustomer(int id, CustomerDto customerDto)
        {
            if (!ModelState.IsValid)

                throw new HttpResponseException(HttpStatusCode.BadRequest);


            var customerIdDb = _context.Customers.SingleOrDefault(c => c.Id == id);

            if (customerIdDb == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            Mapper.Map<CustomerDto, Customer>(customerDto, customerIdDb);
            customerIdDb.Name = customerDto.Name;
            customerIdDb.Birthdate = customerDto.Birthdate;
            customerIdDb.IsSubscribedToNewsletter = customerDto.IsSubscribedToNewsletter;
            customerIdDb.MembershipTypeId = customerDto.MembershipTypeId;

            _context.SaveChanges();
        }

        //DELETE/ api/customers/1
        [System.Web.Http.HttpDelete]
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

