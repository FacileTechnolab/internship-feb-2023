using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class vidlyController : Controller
    {
        // GET: vidly
        public ActionResult Random()
        {
            var movie = new Movie(){name = "Sharek !"};
            ViewData["Movie"]=movie;


            return View(movie);
        }
    }
}