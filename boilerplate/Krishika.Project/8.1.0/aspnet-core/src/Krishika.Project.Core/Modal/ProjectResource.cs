using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Krishika.Project.Modal
{
    public class ProjectResource : Entity<int>
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [ForeignKey("ProjectId")]
        public int ProjectId { get; set; }

        public Project Project { get; set; }

    }
}
