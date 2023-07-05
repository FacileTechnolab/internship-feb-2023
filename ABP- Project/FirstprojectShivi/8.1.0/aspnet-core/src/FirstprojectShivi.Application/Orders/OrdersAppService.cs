using Abp.Domain.Repositories;
using AutoMapper;
using FirstprojectShivi.Order.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstprojectShivi.Order

{
	public class OrderAppService : Abp.Application.Services.ApplicationService, IOrderAppService
	{
		private readonly IMapper _mapper;
		private readonly IRepository<FirstprojectShivi.Models.Order> _orderrepository;
		public OrderAppService(IRepository<FirstprojectShivi.Models.Order> orderrepository, IMapper mapper)
		{
			_mapper = mapper;
			_orderrepository = orderrepository;

		}

		public async Task Create(CreateOrderInput input)

		{
			Models.Order orderoutput = _mapper.Map<CreateOrderInput, Models.Order>(input);

			await _orderrepository.InsertAsync(orderoutput);
		}

		public async Task Delete(DeleteOrderInput input)
		{
			await _orderrepository.DeleteAsync(input.Id);
		}

		public async Task<GetOrderOutput> GetOrderById(GetOrderInput input)
		{
			var getOrder = await _orderrepository.GetAsync(input.Id);
			GetOrderOutput orderoutput = _mapper.Map<Models.Order, GetOrderOutput>(getOrder);
			return orderoutput;
		}

		public async Task<IEnumerable<GetOrderOutput>> ListAll()
		{
			var getAll = await _orderrepository.GetAllListAsync();
			List<GetOrderOutput> orderoutput = _mapper.Map<List<Models.Order>, List<GetOrderOutput>>(getAll);
			return orderoutput;
		}

		public async Task Update(UpdateOrderInput input)
		{
			var orderoutput = await _orderrepository.GetAsync(input.Id);
			if (orderoutput != null)
			{
				orderoutput.FoodName = input.FoodName;
				orderoutput.Price = input.Price;
				orderoutput.IsDelivery = input.IsDelivery;
				


		await _orderrepository.UpdateAsync(orderoutput);
			}
		}
	}
}
