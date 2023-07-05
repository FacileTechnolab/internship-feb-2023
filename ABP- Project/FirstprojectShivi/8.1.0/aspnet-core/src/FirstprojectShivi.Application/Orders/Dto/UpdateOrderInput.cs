using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Order.Dto
{
	public class UpdateOrderInput
	{
		public int Id { get; set; }

		public string FoodName { get; set; }


		public int RestaurantId { get; set; }

		public int Price { get; set; }
		public bool IsDelivery { get; set; }
	}
}
