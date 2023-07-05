using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Models
{
	public class Order : Entity<int>
	{
		[Required]
		[MaxLength(100)]
		public string FoodName { get; set; }

		[Required]
		public int Price { get; set;}

		[Required]
		public bool IsDelivery { get; set;}
		[Required]
		[ForeignKey("RestaurantId")]
		public int RestaurantId { get; set; }

		public Restaurant Restaurants { get; set; }

	}
}
