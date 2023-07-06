using Abp.Application.Services.Dto;
using System;

namespace Jahanvi.Project.Student.DTO
{
    public class GetStudentOutput : EntityDto<int>
    {

        public int CourseId { get; set; }
        public int EnrollmentNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }
        public string CourseName { get; set; }


    }
}
