using Abp.Application.Services;
using AutoMapper;
using Krishika.Project.Modal;
using Krishika.Project.Projects.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Projects
{
    public class ProjectAppServices: IApplicationService, IProjectAppServices 
    {
        private readonly IProjectsServices _projectsService;
        private readonly IMapper _mapper;

        public ProjectAppServices(IProjectsServices projectsService, IMapper mapper )
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
            Krishika.Project.Modal.Projects output = _mapper.Map<CreateProjectsInput, Krishika.Project.Modal.Projects>(input);
            await _projectsService.Create(output);
        }

        public void Delete(DeleteProjectsInput input)
        {
            _projectsService.Delete(input.Id);
        }

        public GetProjectsOutput GetProjectsById(GetProjectsInput input)
        {
            var getProject = _projectsService.GetProjectsById(input.Id);
            GetProjectsOutput output = _mapper.Map<Krishika.Project.Modal.Projects, GetProjectsOutput>(getProject);
            return output;
         }

        public IEnumerable<GetProjectsOutput> ListAll()
        {
            var getAll = _projectsService.GetAllList().ToList();
            List<GetProjectsOutput> output = _mapper.Map<List<Krishika.Project.Modal.Projects>,List<GetProjectsOutput>>(getAll);
            return output;
        }

        public void Update(UpdateProjectsInput input)
        {
            Krishika.Project.Modal.Projects output = _mapper.Map<UpdateProjectsInput, Krishika.Project.Modal.Projects>(input);
            _projectsService.Update(output);
        }
    }
}
