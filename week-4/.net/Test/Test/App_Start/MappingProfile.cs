using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Test.Dto;
using Test.Models;

namespace Test.App_Start
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