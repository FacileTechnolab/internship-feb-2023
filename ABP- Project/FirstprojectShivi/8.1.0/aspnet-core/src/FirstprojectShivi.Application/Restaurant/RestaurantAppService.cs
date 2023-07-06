using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using FirstprojectShivi.Restaurant.Dto;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstprojectShivi.Restaurant
{
	public class RestaurantAppService:ApplicationService
	{
		private  readonly IMapper _mapper;
		private readonly IRepository<FirstprojectShivi.Models.Restaurant> _restaurantrepository;
        public RestaurantAppService(IRepository<FirstprojectShivi.Models.Restaurant> restaurantrepository, IMapper mapper)
        {
			_mapper=mapper;
			_restaurantrepository = restaurantrepository;
            
        }

		public async Task Create(CreateRestaurantInput input)
		{
			Models.Restaurant output = _mapper.Map<CreateRestaurantInput, Models.Restaurant>(input);

			await _restaurantrepository.InsertAsync(output);
		}

		public async Task Delete(DeleteRestaurantInput input)
		{
			 await _restaurantrepository.DeleteAsync(input.Id);
		}

		public async Task<GetRestaurantOutput> GetRestaurantById(EntityDto input)
		{
			var getRestaurant = await _restaurantrepository.GetAsync(input.Id);
			GetRestaurantOutput output =_mapper.Map<Models.Restaurant, GetRestaurantOutput>(getRestaurant);
			return output;
		}
		

		public async Task<IEnumerable<GetRestaurantOutput>> ListAll()
		{
			var getAll= await _restaurantrepository.GetAllListAsync();
			List<GetRestaurantOutput> output = _mapper.Map<List<Models.Restaurant>,List< GetRestaurantOutput>>(getAll);
			return output;

		}

		public  async Task Update(UpdateRestaurantInput input)
		{
			var output = await _restaurantrepository.GetAsync(input.Id);
			if (output != null)
			{
				output.Location = input.Location;
				output.Name = input.Name;
				output.Capacity = input.Capacity;
			

				await _restaurantrepository.UpdateAsync(output);
			}
		}
		public async Task<PagedResultDto<GetRestaurantOutput>> GetRestaurants(GetRestaurantInput input)
		{
			var query = _restaurantrepository.GetAll().WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.Name.Contains(input.Filter)).AsQueryable();
			
			var restaurantCount = await query.CountAsync();
			var restaurant = await query.PageBy(input).ToListAsync();

			return new PagedResultDto<GetRestaurantOutput>(
				restaurantCount,
				ObjectMapper.Map<List<GetRestaurantOutput>>(restaurant)
				);
		}
	}
}
public class GetRestaurantInput : PagedResultRequestDto
{
	public string Filter { get; set; }

}
