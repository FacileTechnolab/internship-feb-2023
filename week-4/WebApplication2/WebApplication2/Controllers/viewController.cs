using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class viewController : Controller
    {
        // GET: view
        public ActionResult Index()
        {
            ViewData["Message"] = "message from view!!";
            ViewData["CurrentTime"]=DateTime.Now;
            string[] name = { "shivangi", "dipali", "janhvi", "krishika" };
            ViewData["names"]=name;

            ViewData["sports"]= new List<string>()
            {
                "cricket",
                "ludo",
                "wollyboll",
                "hockey"
            }; 

            return View();
        }
    }
}