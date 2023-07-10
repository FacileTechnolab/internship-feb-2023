using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.Linq.Extensions;
using AutoMapper;
using Krishika.Project.Projects.DTO;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Krishika.Project.Projects
{
    public class ProjectAppServices : ApplicationService
    {
        private readonly IRepository<Krishika.Project.Modal.Project> _projectsService;
        private readonly IMapper _mapper;

        public ProjectAppServices(IRepository<Krishika.Project.Modal.Project> projectsService, IMapper mapper)
        {
            _projectsService = projectsService;
            _mapper = mapper;
        }

        //public ProjectServices(IApplicationService applicationService, IMapper mapper)
        //{
        //    IProjectsService = ProjectsService;
        //    _mapper = mapper;
        //}
        public async Task Create(CreateProjectsInput input)
        {
            Krishika.Project.Modal.Project output = _mapper.Map<CreateProjectsInput, Krishika.Project.Modal.Project>(input);
            await _projectsService.InsertAsync(output);
        }

        public void Delete(DeleteProjectsInput input)
        {
            _projectsService.Delete(input.Id);
        }

        public async Task<GetProjectsOutput> GetProjectsById(EntityDto input)
        {
            var getProject = await _projectsService.GetAsync(input.Id);
            GetProjectsOutput output = _mapper.Map<Krishika.Project.Modal.Project, GetProjectsOutput>(getProject);
            return output;
        }


        public async Task<IEnumerable<GetProjectsOutput>> ListAll()
        {
            var getAll = await _projectsService.GetAllListAsync();
            List<GetProjectsOutput> output = _mapper.Map<List<Krishika.Project.Modal.Project>, List<GetProjectsOutput>>(getAll);
            return output;
        }

        public async Task Update(UpdateProjectsInput input)
        {
            var output = await _projectsService.GetAsync(input.Id);
            if (output != null)
            {
                output.Name = input.Name;
                output.Description = input.Description;
                await _projectsService.UpdateAsync(output);

            }
        }
        public async Task<PagedResultDto<GetProjectsOutput>> GetProject(GetProjectsInput input)
        {
            var query = _projectsService.GetAll().WhereIf(!input.Filter.IsNullOrWhiteSpace(), x => x.Name.Contains(input.Filter) || x.Description == input.Filter).AsQueryable();

            var projectCount = await query.CountAsync();
            var project = await query.PageBy(input).ToListAsync();

            return new PagedResultDto<GetProjectsOutput>(
            projectCount,
                ObjectMapper.Map<List<GetProjectsOutput>>(project)
                );
        }
    }

}
public class GetProjectsInput : PagedResultRequestDto
{
    public string Filter { get; set; }

}





