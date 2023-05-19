using CodeToFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeToFood.Services
{
    public class InMemoryRestaurant : IRestaurant
    {
        public InMemoryRestaurant()
        {
            _restaurant = new List<Restaurant>
           {
               new Restaurant { Id = 1, Name = "Scott's Pizza Place"},
               new Restaurant { Id = 2, Name = "La-pinoz"},
               new Restaurant { Id = 3, Name = "La-Milano"},
             };
        }
        public IEnumerable<Restaurant> GetAll()
        {
            return _restaurant.OrderBy(r => r.Name); 
        }

        public Restaurant Get(int id)
        {
            return _restaurant.FirstOrDefault(r => r.Id == id);
        }

        List<Restaurant> _restaurant;
    }
}
