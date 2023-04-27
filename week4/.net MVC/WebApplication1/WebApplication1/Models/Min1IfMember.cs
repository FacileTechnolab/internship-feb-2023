﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Serialization;

namespace WebApplication1.Models
{
    public class Min1IfMember: ValidationAttribute
    {
       protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var customer = (Customer)validationContext.ObjectInstance;
            if (customer.MembershipTypeId == MembershipType.Unknown
                || customer.MembershipTypeId == MembershipType.PayAsYouGo)
                return ValidationResult.Success;
            if (customer.Birthdate == null)
                return new ValidationResult("Birthdate is Required.");
            var age = DateTime.Today.Year -  customer.Birthdate.Value.Year;
            return (age >= 18)
                ? ValidationResult.Success 
                : new ValidationResult("Customer should be at least 18 years old to go on membership");
            

        }
    }
}