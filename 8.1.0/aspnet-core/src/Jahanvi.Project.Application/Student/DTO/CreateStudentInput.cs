using System;

namespace Jahanvi.Project.Student.DTO
{
    public class CreateStudentInput
    {
        public int CourseId { get; set; }

        public int EnrollmentNo { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public int Age { get; set; }

    }
}
