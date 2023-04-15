using AutoMapper;
using firstdemonewmvcasp.Dtos;
using firstdemonewmvcasp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace firstdemonewmvcasp.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            Mapper.CreateMap<Customer, CustomerDto>();
            Mapper.CreateMap<CustomerDto, Customer>();
        }
    }
}