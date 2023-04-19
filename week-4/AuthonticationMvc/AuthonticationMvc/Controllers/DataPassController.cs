using AuthonticationMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AuthonticationMvc.Controllers
{
    public class DataPassController : Controller
    {
       

        // GET: Default
        public ActionResult Index(Student student)
        {   //first example
            ViewBag.Id = 2;
            ViewBag.Name = "abc";

            //sec example
            ViewData["ID"] = 1;

            //thired example
            Student obj = new Student();
            obj.Name= "hghgdsghdt";

            ViewBag.Std = obj;


            return View(obj);
        }
    }
}