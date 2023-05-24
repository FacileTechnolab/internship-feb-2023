using CodeToFood.Models;
using CodeToFood.Services;
using CodeToFood.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;  
using System.Linq;
using System.Threading.Tasks;

namespace CodeToFood.Controllers
{
    public class HomeController : Controller
    {
        private IRestaurant _restaurant;
        private IGreeter _greeter;
        private object _restaurantData;

        public HomeController(IRestaurant restaurant, IGreeter greeter)
        {
            _restaurant = restaurant;
            _greeter = greeter;
        }
        public IActionResult Index() 
        {
            var model = new HomeIndexViewModel();
            model.Restaurants = _restaurant.GetAll();
            model.CurrentMessage = _greeter.GetMessageOfTheDay();
            return View(model); 
        }
        public IActionResult Details(int id)
        {
            var model = _restaurant.Get(id);
            if(model == null)
            {
                return RedirectToAction(nameof(Index));
            }
           // return Content(id.ToString());
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
            if (ModelState.IsValid)
            {

                var newRestaurant = new Restaurant();
                newRestaurant.Name = model.Name;
                newRestaurant.Cuisine = model.Cuisine;

                newRestaurant = _restaurant.Add(newRestaurant);
                return RedirectToAction(nameof(Details), new { id = newRestaurant.Id });
            }
            else
            {
                return View();
            }
        }
    }
} 
