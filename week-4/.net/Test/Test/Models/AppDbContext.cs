using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Test.Models
{
    public class AppDbContext : DbContext
    {
        public  AppDbContext()
            {}
        public DbSet<Customer> Customers { get; set; }
        public DbSet<MembershipType> MembershipType{ get; set; }
    }
}