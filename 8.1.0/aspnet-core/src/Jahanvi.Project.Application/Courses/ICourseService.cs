using Abp.Application.Services;
using Jahanvi.Project.Courses.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Courses
{
    public interface ICourseService:IApplicationService
    {
        IEnumerable<GetCourseOutput> ListAll();
        Task Create(CreateCourseInput input);
        void Update(UpdateCourseInput input);
        void Delete(DeleteCourseInput input);
        GetCourseOutput GetCourseById(GetCourseInput input);

    }
}
