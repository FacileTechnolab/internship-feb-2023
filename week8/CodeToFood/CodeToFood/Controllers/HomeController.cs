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
            return View(model);
        }
    }
} 
