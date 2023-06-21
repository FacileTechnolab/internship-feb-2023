
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace AspnetMvc.Models
{
    public class Appdb : DbContext

    {
        public DbSet<User> Users {  get; set; }
    }
}