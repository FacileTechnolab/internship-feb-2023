﻿using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Krishika.Project.Modal
{
    public class Projects: Entity<int>
    {
        [Key]
        [Required]
        //[ForeignKey("ProjectResource")]
        public string Name { get; set; }
        public ProjectResource project { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }
    }
}
