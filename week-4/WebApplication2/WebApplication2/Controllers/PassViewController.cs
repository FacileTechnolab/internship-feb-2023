using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class PassViewController : Controller
    {
        // GET: PassView
        public ActionResult Login(Student student)
        {
            ViewBag.id = 8;
            ViewBag.name = "dipali";
            ViewData["location"] = "name";
                  
            return View();
        }
    }
}