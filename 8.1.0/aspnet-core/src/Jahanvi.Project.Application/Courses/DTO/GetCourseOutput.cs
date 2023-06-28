using Abp.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Courses.DTO
{
    public class GetCourseOutput
    {

        public int Id { get;set; }
        public string Name { get; set; }
        public int Sem { get; set; }


      
       
        public string Description { get; set; }

        public string Professor { get; set; }
    }
}
