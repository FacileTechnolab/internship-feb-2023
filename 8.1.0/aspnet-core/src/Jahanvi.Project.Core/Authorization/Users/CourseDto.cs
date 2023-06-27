using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace Jahanvi.Project.Authorization.Users
{
    [AutoMapFrom(typeof(Course))]
    public class CourseDto : EntityDto<int>
    {
        public string Name { get; set; }
        public int Sem { get; set; }
        public string Description { get; set; }
        public string Professor { get; set; }
    }
}
