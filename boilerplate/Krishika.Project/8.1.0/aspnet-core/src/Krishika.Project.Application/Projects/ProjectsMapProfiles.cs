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
            CreateMap<CreateProjectsInput, Krishika.Project.Modal.Projects>().ReverseMap();

            CreateMap<Krishika.Project.Modal.Projects, GetProjectsOutput>().ReverseMap();

            CreateMap<GetProjectsOutput, Krishika.Project.Modal.Projects>().ReverseMap();

            CreateMap<UpdateProjectsInput, Krishika.Project.Modal.Projects>().ReverseMap();

        }
    }
}
