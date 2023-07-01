using AutoMapper;
using Krishika.Project.ProjectResource.DTO;

namespace Krishika.Project.ProjectResource
{
    public class ProjectResourceMapProfiles : Profile
    {
        public ProjectResourceMapProfiles()
        {
            CreateMap<CreateProjectResourceInput, Modal.ProjectResource>().ReverseMap();

            CreateMap<Modal.ProjectResource, GetProjectResourceOutput>().ReverseMap();

            CreateMap<GetProjectResourceOutput, Modal.ProjectResource>().ReverseMap();

            CreateMap<UpdateProjectResourceInput, Modal.ProjectResource>().ReverseMap();

        }


    }
}
