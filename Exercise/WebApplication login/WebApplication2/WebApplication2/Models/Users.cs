
using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class Users
    {
        [Key]
       
        public int Id { get;set; }

        [DataType(DataType.Text)]
       

        [Required(ErrorMessage = "First name is Required"), MaxLength(30)]
      

        public string FirstName { get;set; }

        [Required(ErrorMessage = "Last name is Required")]
        public string LastName { get;set; }

        [Required(ErrorMessage = "User name is Required")]
        public string User { get;set; }

        [Required(ErrorMessage = "Phone is Required")]
        //[Range(0, 10, ErrorMessage = "Please enter the correct value")]

        public string Phone { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Your Email is not valid.")]
        public string Email { get;set; }

        [Required(ErrorMessage = "Password is Required")]
        [DataType(DataType.Password)]
        public string Password { get;set; }

        [Required(ErrorMessage = "Confirm Password is Required")]
        [DataType(DataType.Password)]

        public string ConfirmPassword { get;set; }

        
    }
}