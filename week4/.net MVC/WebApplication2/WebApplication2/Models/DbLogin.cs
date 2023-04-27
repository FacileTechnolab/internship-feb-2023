using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class DbLogin : DbContext

    {
        public DbLogin() { 
        
          
        }
        public DbSet <Class1> Classes1 { get; set; }
    }
}