using CodeToFood.Models;

namespace CodeToFood.Pages.Restaurants
{
    public interface IRestaurantData
    {
        Restaurant Get(int id);
        void Update(Restaurant restaurant);
    }
}