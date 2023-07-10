using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using Abp.ObjectMapping;
using AutoMapper;
using AutoMapper.Internal.Mappers;
using FirstprojectShivi.Order.Dto;
using FirstprojectShivi.Restaurant.Dto;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace FirstprojectShivi.Order

{
	public class OrderAppService : Abp.Application.Services.ApplicationService
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

		public async Task<GetOrderOutput> GetOrderById(EntityDto input)
		{
			var getOrder = _orderrepository.GetAllIncluding(x => x.Restaurants).FirstOrDefault(x => x.Id == input.Id);
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
				orderoutput.RestaurantId = input.RestaurantId;
				orderoutput.FoodName = input.FoodName;
				orderoutput.Price = input.Price;
				orderoutput.IsDelivery = input.IsDelivery;



				await _orderrepository.UpdateAsync(orderoutput);
			}
		}
		public async Task<PagedResultDto<GetOrderOutput>> GetOrder(GetOrderInput input)
		{
			var query = _orderrepository.GetAllIncluding(x => x.Restaurants).WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.FoodName.Contains(input.Filter)|| x.Price.ToString()==input.Filter||x.IsDelivery.ToString() == input.Filter|| x.Restaurants.Name.Contains(input.Filter)).ToList();

			var newQuery = query.AsQueryable();
			
			var ordercount = newQuery.Count();

			var order = newQuery.PageBy(input).ToList();
			var result = ObjectMapper.Map<List<GetOrderOutput>>(order);
			return new PagedResultDto<GetOrderOutput>(
			ordercount,
			result);
		}
	}

}
public class GetOrderInput : PagedResultRequestDto
{
	public string Filter { get; set; }

}
