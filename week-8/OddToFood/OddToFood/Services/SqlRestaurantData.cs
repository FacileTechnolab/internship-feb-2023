using Microsoft.EntityFrameworkCore;
using OddToFood.Data;
using OddToFood.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OddToFood.Services
{
    public class SqlRestaurantData : IRestaurantData
    {
        private OddToFoodDbContext _context;

        public SqlRestaurantData(OddToFoodDbContext context )
        {
            _context = context;
        }
        public Restaurant Add(Restaurant newRestaurant)
        {
            _context.Restaurants.Add(newRestaurant);
            _context.SaveChanges();
            return newRestaurant;
        }

        public Restaurant Get(int id)
        {
            return _context.Restaurants.FirstOrDefault(r => r.Id == id);
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _context.Restaurants.OrderBy(r => r.Name);
        }

        public Restaurant Update(Restaurant newRestaurant)
        {
            _context.Attach(newRestaurant).State = EntityState.Modified;
            _context.SaveChanges();
            return newRestaurant;
        }
    }
}
