using OddToFood.Model;
using System.Collections.Generic;
using System.Linq;

namespace OddToFood.Services
{
    public class InMemoryRestaurantData : IRestaurantData
    {
        public InMemoryRestaurantData()
        {
            _restaurants = new List<Restaurant>
            {
                new Restaurant{ Id = 1, Name= "Scott pizza place"},
                new Restaurant { Id = 2, Name = "Tersiguels" },
                new Restaurant { Id = 3, Name = "King's of Contrivance" }

            };
        }



       

        public IEnumerable<Restaurant> GetAll()
        {
            return _restaurants.OrderBy(r => r.Name);
        }
        List<Restaurant> _restaurants;
    }
}
