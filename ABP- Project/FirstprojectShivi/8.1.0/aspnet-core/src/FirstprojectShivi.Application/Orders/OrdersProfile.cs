using AutoMapper;
using FirstprojectShivi.Order.Dto;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstprojectShivi.Orders
{
	public class OrderProfile:Profile
	{
		public OrderProfile()
		{
			CreateMap<CreateOrderInput, FirstprojectShivi.Models.Order>().ReverseMap();

			CreateMap<FirstprojectShivi.Models.Order, GetOrderOutput>()
				 .ForMember(x => x.RestaurantName, y => y.MapFrom(z => z.Restaurants.Name)).ReverseMap();
			CreateMap<GetOrderOutput, FirstprojectShivi.Models.Order>().ReverseMap();
			CreateMap<UpdateOrderInput, FirstprojectShivi.Models.Order>().ReverseMap();
		}
	}

}
       
