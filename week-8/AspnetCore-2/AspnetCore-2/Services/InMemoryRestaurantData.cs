using AspnetCore2.Model;
using System.Collections.Generic;
using System.Linq;

namespace AspnetCore2.Services
{
    //    public class InMemoryRestaurantData:IRestaurantData
    //    {
    //        public InMemoryRestaurantData()
    //        {
    //            _restaurants = new List<Restaurant>
    //            {
    //                new Restaurant{Id=1,Name="Scotts'Pizza Place"},
    //				 new Restaurant{Id=2,Name="Octant Pizza"},
    //				  new Restaurant{Id=3,Name="Real Peprika"},
    //				   new Restaurant{Id=4,Name="red Chilli"}


    //			};

    //        }


    //		public IEnumerable<Restaurant> GetAll()
    //		{
    //			return _restaurants.OrderBy(x => x.Id);
    //		}

    //		public Restaurant Get(int id)
    //		{
    //			return _restaurants.FirstOrDefault(x => x.Id == id);
    //		}

    //		public Restaurant Add(Restaurant restaurant)
    //		{
    //			restaurant.Id=_restaurants.Max(x => x.Id)+1;
    //			_restaurants.Add(restaurant);
    //			return restaurant;
    //		}

    //		List<Restaurant> _restaurants;
    //	}
}
