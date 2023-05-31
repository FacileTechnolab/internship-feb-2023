using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace html_to_mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Aboutus()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Portfolio()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Pricing()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contacts()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}