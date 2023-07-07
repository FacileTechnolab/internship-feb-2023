using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using Krishika.Project.ProjectResource.DTO;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Krishika.Project.ProjectResource
{
    public class ProjectAppResource : ApplicationService
    {
        private readonly IRepository<Modal.ProjectResource> _projectResource;
        private readonly IMapper _mapper;
        private object _ProjectAppResource;

        public ProjectAppResource(IRepository<Modal.ProjectResource> projectResource, IMapper mapper)
        {
            _mapper = mapper;
            _projectResource = projectResource;
        }

        public async Task Create(CreateProjectResourceInput input)
        {
            Modal.ProjectResource output = _mapper.Map<CreateProjectResourceInput, Modal.ProjectResource>(input);
            await _projectResource.InsertAsync(output);
        }

        public void Delete(DeleteProjectResourceInput input)
        {
            _projectResource.Delete(input.Id);
        }

        public async Task<GetProjectResourceOutput> GetProjectResourceById(EntityDto input)
        {
            var getProjectAppResource = await _projectResource.GetAsync(input.Id);
            GetProjectResourceOutput output = _mapper.Map<Modal.ProjectResource, GetProjectResourceOutput>(getProjectAppResource);
            return output;

        }

        public async Task<IEnumerable<GetProjectResourceOutput>> ListAll()
        {
            var getAll = await _projectResource.GetAllListAsync();
            List<GetProjectResourceOutput> output = _mapper.Map<List<Modal.ProjectResource>, List<GetProjectResourceOutput>>(getAll);
            return output;
        }

        public async Task Update(UpdateProjectResourceInput input)
        {
            var output = await _projectResource.GetAsync(input.ProjectId);
            if (output != null)
            {
                output.FirstName = input.FirstName;
                output.LastName = input.LastName;
                await _projectResource.UpdateAsync(output);
            }
        }

        public async Task<PagedResultDto<GetProjectResourceOutput>> GetProjectResource(GetProjectResourceInput input)
        {
            var query = _projectResource.GetAll().Include(x => x.Project).WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.FirstName.Contains(input.Filter)).AsQueryable();
            var projectresourcecount = await query.CountAsync();
            var projectAppResource = await query.PageBy(input).ToListAsync();
            var result = ObjectMapper.Map<List<GetProjectResourceOutput>>(projectAppResource);
            return new PagedResultDto<GetProjectResourceOutput>(
            projectresourcecount, result);


        }

    }
}
public class GetProjectResourceInput : PagedResultRequestDto
{
    public string Filter { get; set; }


}
