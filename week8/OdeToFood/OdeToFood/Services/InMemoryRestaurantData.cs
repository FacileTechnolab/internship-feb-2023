using OdeToFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OdeToFood.Services
{
     public class InMemoryRestaurantData : IRestaurantData
    {
        public InMemoryRestaurantData()
        {
            _restaurants = new List<Restaurant>
            {
                new Restaurant{Id=1,Name="Jahanvi Gameti"},
                new Restaurant{Id=2,Name="Virat Kohli"},
                new Restaurant{Id=3,Name="Krishika"}
            };
        }
        public IEnumerable<Restaurant> GetAll()
        {
            return _restaurants.OrderBy(r => r.Name);
        }
        List<Restaurant> _restaurants;
    }
}
