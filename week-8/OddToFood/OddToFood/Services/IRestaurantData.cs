using OddToFood.Model;
using System.Collections;
using System.Collections.Generic;

namespace OddToFood.Services
{
    public interface IRestaurantData
    {
        IEnumerable<Restaurant> GetAll();
        Restaurant Get(int id);
    }
}
