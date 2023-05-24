using CodeToFood.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeToFood.Data
{
    public class CodeToFoodDbContext :DbContext 
    {
        public CodeToFoodDbContext(DbContextOptions options)
            :base(options)
        {

        }
        public DbSet<Restaurant> Restaurants{ get; set; }
    }
}
