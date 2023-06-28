using Abp.Domain.Entities;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Jahanvi.Project.Courses
{
    public class Course : Entity<int>
    {
        [Required]
        [Column(Order = 0)]

        public string Name { get; set; }


        [Required]
        [Column(Order = 1)]
        public int Sem { get; set; }


        [Required]
        [Column(Order = 2)]
        public string Description { get; set; }


        [Required]
        [Column(Order = 3)]
        public string Professor { get; set; }



        //[ForeignKey(User)]
        //public int TenantId { get; set; }
        //I 
    }
}
