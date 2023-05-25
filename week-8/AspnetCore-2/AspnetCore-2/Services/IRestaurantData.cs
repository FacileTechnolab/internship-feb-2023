using AspnetCore2.Model;
using System.Collections;
using System.Collections.Generic;

namespace AspnetCore2.Services
{
    public interface IRestaurantData
{
        IEnumerable<Restaurant>GetAll();
        Restaurant Get(int id);
        Restaurant Add(Restaurant restaurant);
        Restaurant Update(Restaurant restaurant);
}
}
