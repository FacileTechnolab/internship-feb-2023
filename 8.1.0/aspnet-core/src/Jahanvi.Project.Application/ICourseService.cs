using Abp.Application.Services;
using Jahanvi.Project.Courses.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project
{
    public interface ICourseService:IApplicationService
    {
        Task<IEnumerable<GetCourseOutput>> ListAll();
        Task Create(CreateCourseInput input);
        Task Update(UpdateCourseInput input);
        Task Delete(DeleteCourseInput input);
        Task<GetCourseOutput> GetCourseById(GetCourseInput input);
    }
}
