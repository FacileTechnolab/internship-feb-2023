﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Courses.DTO
{
    public class UpdateCourseInput
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Sem { get; set; }




        public string Description { get; set; }

        public string Professor { get; set; }
    }
}
