using Abp.Application.Services;
using Krishika.Project.ProjectResource.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Krishika.Project.ProjectResource
{
    public interface IProjectAppResource : IApplicationService
    {
        IEnumerable<GetProjectResourceOutput> ListAll();
        Task Create(CreateProjectResourceInput input);
        Task Update(UpdateProjectResourceInput input);
        Task Delete(DeleteProjectResourceInput input);

        Task<GetProjectResourceOutput> GetProjectResourceById(GetProjectResourceInput input);


    }
}
