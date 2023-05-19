using OddToFood.Models;
using System.ComponentModel.DataAnnotations;

namespace OddToFood.ViewModles
{
    public class RestaurantEditModel
    {
        [Required, MaxLength(80)]
        public string Name { get; set; }
        public CuisineType Cuisine { get; set; }
    }
}
