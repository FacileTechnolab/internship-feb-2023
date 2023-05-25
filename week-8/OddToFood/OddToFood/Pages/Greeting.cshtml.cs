using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OddToFood.Services;

namespace OddToFood.Pages
{
    public class GreetingModel : PageModel
    {
        private readonly IGreeter _greeter;
        public string CurrentGreeting { get; set; }

        public GreetingModel(IGreeter greeter)
        {
            _greeter = greeter;
        }
        public void OnGet(string name)
        {
            CurrentGreeting = $"{name}: {_greeter.GetMessageOfTheDay()}";
        }
    }
}
