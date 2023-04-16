using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity; 
using System.Linq;
using System.Web;

namespace Webapp.Models
{
    public class AppDataContext:DbContext
    {
       
        public AppDataContext() 
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<MemberShipType> MemberShipTypes { get; set; }
       
    }
}