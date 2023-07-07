using Abp.Application.Services.Dto;
using System;

namespace Jahanvi.Project.Student.DTO
{
    public class UpdateStudentInput : EntityDto
    {
        public int CourseId { get; set; }
        public int EnrollmentNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }

    }
}
