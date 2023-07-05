using AutoMapper;
using FirstprojectShivi.Restaurant.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FirstprojectShivi.Models;

namespace FirstprojectShivi.Restaurant
{
public class RestaurantProfile:Profile
	{
        public RestaurantProfile()
        {
			CreateMap<CreateRestaurantInput,FirstprojectShivi.Models.Restaurant>().ReverseMap();
			CreateMap<FirstprojectShivi.Models.Restaurant, GetRestaurantOutput>().ReverseMap();
			CreateMap<GetRestaurantOutput, FirstprojectShivi.Models.Restaurant>().ReverseMap();
			CreateMap<UpdateRestaurantInput, FirstprojectShivi.Models.Restaurant>().ReverseMap();
			
		}
    }
}
