using CodeToFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeToFood.ViewModels
{
    public class HomeIndexViewModel
    {
        public IEnumerable<Restaurant> Restaurant { get; set; }
        public string CurrentMessage { get; set; }
        public IEnumerable<Restaurant> Restaurants { get; internal set; }
    }
} 
