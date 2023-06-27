//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Jahanvi.Project.Authorization.Users
//{
//    public  class Student
//    {
//        [ForeignKey()]
//        public string Name { get; set; }

//        [Required]
//        [Column(Order = 0)]

//        public int EnrollmentNo { get; set; }

//        [Required]
//        [Column(Order = 1)]
//        public string FirstName { get; set; }

//        [Required]
//        [Column(Order = 2)]
//        public string LastName { get; set; }

//        [Required]
//        [Column(Order = 3)]

//        public DateTime DateOfBirth { get; set; }

//        [Required]
//        [Column(Order = 4)]
//        public DateTime Age { get; set; }

//    }
//}
