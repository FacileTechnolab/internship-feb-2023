using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class userController : Controller
    {
        // GET: user
        public ActionResult Login1()
        {
            ViewBag.Id = 1;
            ViewBag.name = "Jahanvi";

            ViewData["Id"] = 2;
            Student student = new Student();
            student.ID = "1000";
            student.Name = "joy";
            ViewBag.std=student;

            return View(student);
        }
    }
}