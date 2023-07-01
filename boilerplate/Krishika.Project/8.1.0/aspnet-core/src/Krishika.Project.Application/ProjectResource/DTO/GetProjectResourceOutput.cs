namespace Krishika.Project.ProjectResource.DTO
{
    public class GetProjectResourceOutput
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int ProjectId { get; set; }
        public Modal.Project Projects { get; set; }
    }
}
