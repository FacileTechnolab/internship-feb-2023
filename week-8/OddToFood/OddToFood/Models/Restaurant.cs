﻿using OddToFood.Models;
using System.ComponentModel.DataAnnotations;

namespace OddToFood.Model
{
    public class Restaurant
    {

        public int Id { get; set; }

        [Display(Name= "Restaurant Name")]
        [Required, MaxLength(80)]
        //[DataType(DataType.Password)]
        public string Name { get; set; }
        public CuisineType Cuisine { get; set; }
    }
}
