using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class partialviewController : Controller
    {
        // GET: partialview
        public ActionResult Index()
        {
            return View();
        }
    }
}