using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(int? pageIndex, string sortBy)
        {
            if (!pageIndex.HasValue)
                pageIndex = 1;
            if (String.IsNullOrEmpty(sortBy))
                sortBy = "Name";
            return Content(String.Format("pageIndex={0}&sortBy={1}", pageIndex, sortBy));
        }
        public ActionResult Random()
        {

            // var home = new Home()
            //{
            //     Name = "jahanvi"
            // };
            // //return View();
            // return Content("hello World");
            // return HttpNotFound();
            // return new EmptyResult();
            //return RedirectToAction("index", "home", new { page = 1, sortby = "name" });
            return View();

        }

        public ActionResult Edit(int id)
        {
            return Content("id=" + id);
        }
        //public ActionResult About()
        //{
        //    ViewBag.Message = "Your application description page.";

        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}
    } }