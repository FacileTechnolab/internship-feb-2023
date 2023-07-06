using AutoMapper;
using Jahanvi.Project.Student.DTO;


namespace Jahanvi.Project
{
    public class StudentMapProfile : Profile
    {
        public StudentMapProfile()
        {
            CreateMap<CreateStudentInput, Authorization.Users.Student>().ReverseMap();
            CreateMap<Authorization.Users.Student, GetStudentOutput>()
                .ForMember(x => x.CourseName, y => y.MapFrom(z => z.Course.Name))
                .ReverseMap();
            CreateMap<GetStudentOutput, Authorization.Users.Student>().ReverseMap();
            CreateMap<UpdateStudentInput, Authorization.Users.Student>().ReverseMap();
        }
    }
}
