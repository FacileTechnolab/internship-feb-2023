using Abp.Domain.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Jahanvi.Project.Authorization.Users
{
    public class Student : Entity<int>
    {
        [ForeignKey("CourseId")]
        public int CourseId { get; set; }
        public Course Course { get; set; }
        [Required]
        public int EnrollmentNo { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public int Age { get; set; }



    }



}





