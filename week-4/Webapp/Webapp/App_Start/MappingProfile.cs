using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Webapp.Dtos;
using Webapp.Models;

namespace Webapp.App_Start
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<Employee, EmployeeDto>();
            Mapper.CreateMap<EmployeeDto, Employee>();


        }
    }
}