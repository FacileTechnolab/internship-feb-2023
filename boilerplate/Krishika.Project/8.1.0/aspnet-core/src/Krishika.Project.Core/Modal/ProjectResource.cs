using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Modal
{
    public class ProjectResource: Entity<int>
    {
        [Key]
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Project { get; set; }

        public ICollection<Projects> project { get; set; }
    }
}
