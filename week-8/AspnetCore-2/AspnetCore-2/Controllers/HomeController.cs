using AspnetCore2.Model;
using AspnetCore2.Services;
using AspnetCore2.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace AspnetCore2.Controllers 
{
	public class HomeController :Controller
	{
		private readonly IRestaurantData _restaurantData;
		private readonly IGreeter _greeter;

		public HomeController(IRestaurantData restaurantData,
			IGreeter greeter)
        {
            _restaurantData=restaurantData;
			_greeter=greeter;
            
        }
        //public string Index()
        //{

        //	return "this is controller";[Restaurants]
        //}
        public IActionResult Index()
		{
			//var model= new Restaurant { Id = 1 ,Name="Dipali"};
			//return new ObjectResult(model);
			var model =new HomeIndexViewModel();
			model.Restaurants=_restaurantData.GetAll();
			model.CurrentMessage = _greeter.GetMessageOfTheDay();
			return View(model);
		}
		public IActionResult Details(int id)
		{
			//return Content(id.ToString());
			var model = _restaurantData.Get(id);

			if(model == null)
			{
				return RedirectToAction(nameof(Index));
			}
			return View(model);
		}
		[HttpGet]
		public IActionResult Create()
		{
			return View();
		}
		[HttpPost]
		[ValidateAntiForgeryToken]
		public IActionResult Create(RestaurantEditModel model)
		{
			if(ModelState.IsValid)
			{
				var newRestaurant =new Restaurant();
				newRestaurant.Name = model.Name;
				newRestaurant.Cuisine = model.Cuisine;
				newRestaurant = _restaurantData.Add(newRestaurant);
				//return View("Details",newRestaurant);
				return RedirectToAction(nameof(Details), new { id = newRestaurant.Id });
			}
			else
			{
				return View();
			}

			
		}
	}
}
