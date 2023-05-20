using OddToFood.Services;
using Microsoft.AspNetCore.Mvc;

namespace OddToFood.ViewComponents
{
    public class GreeterViewComponent : ViewComponent
    {
        private IGreeter _greeter;

        public GreeterViewComponent(IGreeter greeter )
        {
            _greeter = greeter;
        }
        public IViewComponentResult Invoke()
        {
            var model = _greeter.GetMessageOfTheDay();  
            return View("Default",  model );
        }
    }
}
