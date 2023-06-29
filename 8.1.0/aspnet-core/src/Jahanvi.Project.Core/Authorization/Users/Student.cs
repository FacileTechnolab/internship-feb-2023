using Abp.Domain.Entities;
using Microsoft.AspNetCore.Components.Web.Virtualization;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jahanvi.Project.Authorization.Users
{
    public class Student : Entity<int>
    {
        [Key]

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

        [ForeignKey("Id")]
        public virtual int Id { get; set; }
        public ICollection<Course> course { get; set; }
    }



}



    

