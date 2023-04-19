using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Authentication.Models
{
    public class IdentityDbContext:DbContext
    {
        public IdentityDbContext()
        {

        }
        public DbSet<Employee> Employees { get; set; }
       // public DbSet<Customer> Customers { get; set; }
        public DbSet<MemberShipType> MemberShipTypes { get; set; }
    }
}