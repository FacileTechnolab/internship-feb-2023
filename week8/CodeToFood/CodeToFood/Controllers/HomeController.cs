using CodeToFood.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;  
using System.Linq;
using System.Threading.Tasks;

namespace CodeToFood.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var model = new Restaurant { Id = 1, Name = "Scott's Pizza Place"};
            return View(model); 
        }
    }
} 
