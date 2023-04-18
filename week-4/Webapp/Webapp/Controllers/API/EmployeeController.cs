using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Webapp.Dtos;
using Webapp.Models;

namespace Webapp.Controllers.API
{
    public class EmployeeController : ApiController
    {
        private AppDataContext _context;
        public EmployeeController()
        {
            _context = new AppDataContext();


        }
        // GET/api/Employee
        public IEnumerable<EmployeeDto> GetEmployees()
        {
            return _context.Employees.ToList().Select(Mapper.Map<Employee,EmployeeDto>);

        }

        // GET/api/Employee/1
        public IHttpActionResult GetEmployee(int id) 
        {
            var Employee = _context.Employees.SingleOrDefault(E=>E.EmployeeId == id);
            if (Employee == null)
                return NotFound();
            return Ok(Mapper.Map < Employee,EmployeeDto > (Employee));
        }


        // POST/api/Employee
        [System.Web.Http.HttpPost]
        public IHttpActionResult CreateEmployee(EmployeeDto employeeDto) 
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var employee = Mapper.Map<EmployeeDto, Employee>(employeeDto);

            _context.Employees.Add(employee);
            _context.SaveChanges();

            employeeDto.EmployeeId = employee.EmployeeId;

            return Created(new Uri(Request.RequestUri + "/" + employee.EmployeeId),employeeDto );
        }


        //PUT/api/Employee/1
        [System.Web.Http.HttpPut]

        public void UpdateEmployees(int id, EmployeeDto employeeDto)
        {

            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            var EmployeeInDb = _context.Employees.SingleOrDefault(E => E.EmployeeId == id);
            if(EmployeeInDb == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            Mapper.Map(employeeDto, EmployeeInDb);

            _context.SaveChanges();
        }


        // DELETE/api/Employee/1
        [System.Web.Http.HttpDelete]
        public void DeleteEmployee(int id)
        {
            var EmployeeInDb = _context.Employees.SingleOrDefault(E => E.EmployeeId == id);
            if (EmployeeInDb == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            _context.Employees.Remove(EmployeeInDb);
            _context.SaveChanges();

        }
    }
}
