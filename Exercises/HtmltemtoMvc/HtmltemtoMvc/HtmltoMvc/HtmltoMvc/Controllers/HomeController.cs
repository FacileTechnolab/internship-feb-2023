﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HtmltoMvc.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        [AllowAnonymous]
        public ActionResult Index()
        {
            //if(Session["UserId"] == null)
            //{
            //    return RedirectToAction("Login", "Users");
                
                
            //}
            //else
            //{
                return View();
            //}
            
        }

        //public actionresult about()
        //{
        //    viewbag.message = "your application description page.";

        //    return view();
        //}

        //public actionresult contact()
        //{
        //    viewbag.message = "your contact page.";

        //    return view();
        //}
        public ActionResult Home()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Partners()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Marketing()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Faq()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


    }
}