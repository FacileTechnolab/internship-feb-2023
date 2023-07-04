using Abp.Application.Services.Dto;

namespace Jahanvi.Project.Courses.DTO
{
    public class RoleCourseDto : EntityDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Sem { get; set; }

        public string Description { get; set; }

        public string Professor { get; set; }
    }
}
