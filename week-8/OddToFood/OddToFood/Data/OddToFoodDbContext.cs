using Microsoft.EntityFrameworkCore;
using OddToFood.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OddToFood.Data
{
    public class OddToFoodDbContext : DbContext
    {
        public OddToFoodDbContext(DbContextOptions options)
            :base(options)
        {

        }
        public DbSet<Restaurant> Restaurants { get; set; }
    }
}
