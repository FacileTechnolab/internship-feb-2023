using AutoMapper;
using Jahanvi.Project.Authorization.Users;
using Jahanvi.Project.Courses.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project
{
    public class CourceMapPrpfile:Profile
    {
        public CourceMapPrpfile()
        {
            CreateMap<CreateCourseInput, Course>().ReverseMap();
            CreateMap<Course, GetCourseOutput>().ReverseMap();
            CreateMap<GetCourseOutput, Course>().ReverseMap();
            CreateMap<UpdateCourseInput, Course>().ReverseMap();
        }
    }
}
