using Abp.Application.Services.Dto;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using Jahanvi.Project.Courses;
using System.ComponentModel.DataAnnotations;

namespace Jahanvi.Project.Authorization.Users
{
    [AutoMapFrom(typeof(Course))]
    public class CourseDto : EntityDto<int>
    {

        [Required]
         
        public string Name { get; set; }
        [Required]
        public int Sem { get; set; }


        [Required]
        [StringLength(AbpUserBase.MaxUserNameLength)]
        public string Description { get; set; }
        [Required]
        public string Professor { get; set; }
    }
}
