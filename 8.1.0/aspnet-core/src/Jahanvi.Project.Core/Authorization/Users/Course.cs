using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Authorization.Users
{
    public class Course:Entity<int>
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



       
    
}
}
