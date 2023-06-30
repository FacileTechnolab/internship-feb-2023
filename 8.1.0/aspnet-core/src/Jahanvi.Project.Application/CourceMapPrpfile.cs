using AutoMapper;
using Jahanvi.Project.Authorization.Users;
using Jahanvi.Project.Courses.DTO;

namespace Jahanvi.Project
{
    public class CourceMapPrpfile : Profile
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
