using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeToFood.Data;
using CodeToFood.Models;

namespace CodeToFood.Services
{
    public class SqlRestaurantData : IRestaurant
    {
       
        private CodeToFoodDbContext _context;

        public SqlRestaurantData(CodeToFoodDbContext Context)
        {
            _context = Context;
        }
        public Restaurant Add(Restaurant restaurant)
        {
             _context.Restaurants.Add(restaurant);
            _context.SaveChanges();
            return restaurant;
        }

        public Restaurant Get(int id)
        {
            return _context.Restaurants.FirstOrDefault(r => r.Id == id);
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return  _context.Restaurants.OrderBy(r => r.Name);
        }
    }
}
