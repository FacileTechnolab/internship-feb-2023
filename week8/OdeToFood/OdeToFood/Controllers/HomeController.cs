﻿using Microsoft.AspNetCore.Mvc;
using OdeToFood.Models;
using OdeToFood.Services;
using OdeToFood.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OdeToFood.Controllers
{
    public class HomeController: Controller
    {
        private IRestaurantData _restaurantData;
        private IGreeter _greeter;

        public HomeController(IRestaurantData restaurantData,
                                IGreeter greeter)
        {
            _restaurantData = restaurantData;
            _greeter = greeter;
        }
        
        public IActionResult Index()
        {
            var model = new HomeIndexViewModel();
            model.Restaurants = _restaurantData.GetAll();
            model.CurrentMessage = _greeter.GetMessageOfTheDay();
                /*_restaurantData.GetAll();*/
            //var model = new Restaurant { Id = 1,
            //    Name = "Jahanvi Gameti" };
            //return new ObjectResult(model);
            return View(model);
        }
        public IActionResult Details(int id)
        {
            var model = _restaurantData.Get(id);
            if (model == null)
            {
                return RedirectToAction(nameof(Index));
            }
            return View(model);

            //return Content(id.ToString());
        }
        [HttpGet]
        public IActionResult Create() { 
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(RestaurantEditModel model)
        {
            if(ModelState.IsValid) { 
            //return Content("POST");
            var newRestaurant = new Restaurant();
            newRestaurant.Name = model.Name;
            newRestaurant.Cuisine = model.Cuisine;
            newRestaurant = _restaurantData.Add(newRestaurant);
      
            return RedirectToAction(nameof(Details), new {id=newRestaurant.Id});
            }
            else
            {
                return View();
            }
        }
    }
}
