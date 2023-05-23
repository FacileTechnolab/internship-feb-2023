using AspnetCore2.Model;
using System.ComponentModel.DataAnnotations;

namespace AspnetCore2.ViewModel
{
    public class RestaurantEditModel
    {
        [Required,MaxLength(255)]
		public string Name { get; set; }
		public CuisineType Cuisine { get; set; }

    }
}
