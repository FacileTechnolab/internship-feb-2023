using CodeToFood.Services;
using Microsoft.AspNetCore.Mvc; 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeToFood.ViewComponents
{
    public class GreeterViewComponents : ViewComponent
    {
        private IGreeter _greeter;

        public GreeterViewComponents(IGreeter greeter)
        {
            _greeter = greeter;
        }
        public  IViewComponentResult Invoke()
        {
            var model = _greeter.GetMessageOfTheDay();
            return View("Default",   model);
        }
    }
}
