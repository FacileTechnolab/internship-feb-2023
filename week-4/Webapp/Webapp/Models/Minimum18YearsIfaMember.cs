using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapp.Models
{
    public class Minimum18YearsIfaMember :ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var Employee = (Employee)validationContext.ObjectInstance;
            if (Employee.MemberShipTypeId == 0 || Employee.MemberShipTypeId == 1)
                return ValidationResult.Success;

            if (Employee.Birthdate == null)
                return new ValidationResult("Birthdate  is required");

            var age = DateTime.Today.Year - Employee.Birthdate.Value.Year;

            return (age > 18) 
                ? ValidationResult.Success 
                : new ValidationResult("Employee should  be at  least 18 years old to go on  a membership.");

        }
    }
}