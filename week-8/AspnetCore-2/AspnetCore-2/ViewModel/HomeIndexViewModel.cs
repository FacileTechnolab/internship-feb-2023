using AspnetCore2.Model;
using System.Collections.Generic;

namespace AspnetCore2.ViewModel
{
    public class HomeIndexViewModel
    {
        public IEnumerable<Restaurant> Restaurants { get; set; }
        public string CurrentMessage { get; set; }
    }
}
