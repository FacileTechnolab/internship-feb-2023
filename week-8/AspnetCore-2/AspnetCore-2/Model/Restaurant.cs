using System.ComponentModel.DataAnnotations;

namespace AspnetCore2.Model
{
    public class Restaurant
	{

		public int Id { get; set; }
		[Display(Name="Restaurant Name")]
		//[DataType(DataType.Password)]
		[Required,MaxLength(255)]
		public string Name { get; set; }
		public CuisineType Cuisine { get; set; }
	}
}
