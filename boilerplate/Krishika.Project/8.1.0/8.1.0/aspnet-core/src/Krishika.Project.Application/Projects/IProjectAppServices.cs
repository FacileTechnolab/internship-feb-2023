using Abp.Application.Services;
using Krishika.Project.Projects.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Projects
{
   public interface IProjectAppServices: IApplicationService
    {
        IEnumerable<GetProjectsOutput> ListAll();
        Task Create(CreateProjectsInput input);
        Task Update(UpdateProjectsInput input);
        Task Delete(DeleteProjectsInput input);
        Task<GetProjectsOutput> GetProjectsById(GetProjectsInput input);

    }
}
