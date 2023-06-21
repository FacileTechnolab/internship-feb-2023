using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using AspnetMvc.Models;

namespace AspnetMvc.Models
{
    public class User
    {
        [Key]
        public int  id { get; set; }
        [Required(ErrorMessage ="first name is required"), MaxLength(30)]
        [Display(Name = "First Name")]
        public string firstname { get; set; }
        [Required(ErrorMessage = "last name is required")]
        [Display(Name = "Last Name")]
        public string lastname { get; set; }
        [Required(ErrorMessage = "user name is required")]
        [Display(Name = "User Name")]
        public string username { get; set; }
        [Required(ErrorMessage = "email name is required")]
        [Display(Name = "Email")]
		[RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Your Email is not valid.")]
		public string email { get; set; }
        [Required(ErrorMessage = "password  is required")]
        [Display(Name = "Password")]
		[DataType(DataType.Password)]
		public string password { get; set; }
        [Required(ErrorMessage = "confirm password is required")]
        [Display(Name = "Confirm Password")]
		[DataType(DataType.Password)]
		public string confirmpassword { get; set; }

    }
}