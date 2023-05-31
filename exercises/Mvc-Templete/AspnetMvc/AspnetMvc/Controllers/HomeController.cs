using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvc.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		//public ActionResult About()
		//{
		//	ViewBag.Message = "Your application description page.";

		//	return View();
		//}

		//public ActionResult Contact()
		//{
		//	ViewBag.Message = "Your contact page.";

		//	return View();
		//}

        public ActionResult Home()
        {
            

            return View();
        }

		public ActionResult Media()
		{


			return View();
		}

		public ActionResult Tickets()
		{


			return View();
		}

		public ActionResult Cities()
		{


			return View();
		}

		public ActionResult FAQ()
		{


			return View();
		}

		public ActionResult Comments()
		{


			return View();
		}

		public ActionResult Sponsorship()
		{


			return View();
		}
	}
}