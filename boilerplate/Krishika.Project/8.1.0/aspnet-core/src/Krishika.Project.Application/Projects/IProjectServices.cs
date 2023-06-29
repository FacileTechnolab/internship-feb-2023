using Abp.Application.Services;
using Krishika.Project.Projects.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Projects
{
   public interface IProjectServices: IApplicationService
    {
        IEnumerable<GetProjectsOutput> ListAll();
        Task Create(CreateProjectsInput input);
        void Update(UpdateProjectsInput input);
        void Delete(DeleteProjectsInput input);
        GetProjectsOutput GetProjectsById(GetProjectsInput input);

    }
}
