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
	public class Restaurant : Entity<int>
	{
		

			[Required]
			public string Name { get; set; }
			[Required]
			public string Location { get; set; }
			
		
			public DateTime? OpeningTime { get; set; }
		
			public DateTime? ClosedTime { get; set; }
			[Required]
			public int Capacity { get; set; }

	




	}
}
