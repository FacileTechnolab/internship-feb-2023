using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1
{
    public class ApplicationDbContext : DbContext
    {
         public ApplicationDbContext()
        {

        } 

        public DbSet<Customer> Customers { get; set; }
       public DbSet<Employee>Employees { get; set; }

        public DbSet<Student> Students { get; set; }
    }
}