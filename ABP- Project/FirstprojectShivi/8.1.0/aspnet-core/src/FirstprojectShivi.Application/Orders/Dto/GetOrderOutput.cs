using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Order.Dto
{
	public class GetOrderOutput
	{
		public int Id { get; set; }
		public string RestaurantName { get; set; }
		public string FoodName { get; set; }


		public int RestaurantId { get; set; }

		public int Price { get; set; }

		public bool IsDelivery { get; set; }



		public FirstprojectShivi.Models.Restaurant? Restaurants { get; set; }
	}
}
