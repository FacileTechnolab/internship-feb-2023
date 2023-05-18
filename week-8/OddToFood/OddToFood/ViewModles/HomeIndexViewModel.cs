using OddToFood.Model;
using System.Collections;
using System.Collections.Generic;

namespace OddToFood.ViewModles
{
    public class HomeIndexViewModel
    {
        public IEnumerable<Restaurant> Restaurants { get; set; }
        public string CurrentMessage { get; set; }
    }
}
