using Abp.Application.Services;
using Abp.Domain.Services;
using FirstprojectShivi.Restaurant.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Restaurant
{
public interface IRestaurantAppService:IApplicationService
	{
		Task<IEnumerable<GetRestaurantOutput>> ListAll();
		Task Create(CreateRestaurantInput input);
		Task Update(UpdateRestaurantInput input);
		Task Delete(DeleteRestaurantInput input);
		Task<GetRestaurantOutput> GetRestaurantById(GetRestaurantInput input);
	}
}
