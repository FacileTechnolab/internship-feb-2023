using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Restaurant.Dto
{
	public class UpdateRestaurantInput
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Location { get; set; }

		public DateTime? OpeningTime { get; set; }

		public DateTime? ClosedTime { get; set; }

		public int Capacity { get; set; }
	}
}
