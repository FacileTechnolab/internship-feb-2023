using AspnetCore2.Data;
using AspnetCore2.Model;
using System.Collections.Generic;
using System.Linq;

namespace AspnetCore2.Services
{
	public class SqlRestaurantData : IRestaurantData
	{
		private  readonly AppDbContext _context;

		public SqlRestaurantData(AppDbContext context)
        {
            _context=context;
        }
        public Restaurant Add(Restaurant restaurant)
		{
			_context.Restaurants.Add(restaurant);
			_context.SaveChanges();
			return restaurant;
		}

		public Restaurant Get(int id)
		{
			return _context.Restaurants.FirstOrDefault(x => x.Id == id);
		}

		public IEnumerable<Restaurant> GetAll()
		{
			return _context.Restaurants.OrderBy(x => x.Id);
		}
	}
}
