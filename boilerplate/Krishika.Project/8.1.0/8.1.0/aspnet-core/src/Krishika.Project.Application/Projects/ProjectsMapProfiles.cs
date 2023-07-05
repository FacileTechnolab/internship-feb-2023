using AutoMapper;
using Krishika.Project.Projects.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Projects
{
    public class ProjectsMapProfiles: Profile
    {
        public ProjectsMapProfiles()
        {
            CreateMap<CreateProjectsInput, Krishika.Project.Modal.Project>().ReverseMap();

            CreateMap<Krishika.Project.Modal.Project, GetProjectsOutput>().ReverseMap();

            CreateMap<GetProjectsOutput, Krishika.Project.Modal.Project>().ReverseMap();

            CreateMap<UpdateProjectsInput, Krishika.Project.Modal.Project>().ReverseMap();

        }
    }
}
