using Abp.Application.Services;
using FirstprojectShivi.Order.Dto;

using FirstprojectShivi.Restaurant.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Order
{
	public interface IOrderAppService:IApplicationService
	{
		Task<IEnumerable<GetOrderOutput>> ListAll();
		Task Create(CreateOrderInput input);
		Task Update(UpdateOrderInput input);
		Task Delete(DeleteOrderInput input);
		Task<GetOrderOutput> GetOrderById(GetOrderInput input);
	}
}
