using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Jahanvi.Project.Authorization;
using Jahanvi.Project.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Courses
{
    [AbpAuthorize(PermissionNames.Pages_Products)]
    public class CourseAddService : CrudAppService<Course, CourseDto>
    {
        public CourseAddService(IRepository<Course, int> repository) : base(repository)
        {
        }
    }
}
