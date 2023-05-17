using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using HtmltoMvc.Models;
using System.Web.Security;
using System.Linq;
using System.Web;

namespace HtmltoMvc.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required(ErrorMessage = "First Name is Required field")]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is Required field")]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Username is Required field")]
        [Display(Name = "Username")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Password is Required field")]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is Required field")]
        [Display(Name = "Confirm Password")]
        [Compare("Password", ErrorMessage = "Password is not Identical")]

        public string Confirm_Password { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        [Display(Name = "Email Id")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Email is  not valid")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Mobile is Required")]
        [Display(Name = "Mobile")]
        public string PhoneNumber { get; set; }
       

    }
}