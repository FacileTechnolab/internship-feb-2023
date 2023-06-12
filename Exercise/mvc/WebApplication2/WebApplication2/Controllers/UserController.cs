using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class UserController : Controller
    {
        AppDb db=new AppDb();
        public ActionResult Index()
        {
            return View();
        }
   
        public ActionResult Signin()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        [HttpPost]
        public ActionResult Signin(Users users)

        {
         
        //    if (users is null)
        //    {
        //        throw new ArgumentNullException(nameof(users));
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        AppDb db = new AppDb();
        //        return RedirectToAction("Index", "Home");
        //        db.Users.Add(users);
        //        db.SaveChanges();
        //    }
           return View(users);
        }
        public ActionResult Signup(Users users)
            {
               if(ModelState.IsValid)
            {
                db.Users.Add(users);
                db.SaveChanges();
                ViewBag.InsertMessage = "<script>alert('succesfull !!')</script>";
                return RedirectToAction("Index");
             
                
            } else {
                ViewBag.InsertMessage = "<script>alert('succesfull faild!!')</script>";
            }

                return View();
            }
        }

    //[HttpPost]
//    public ActionResult Signup(Users users)
//        {


//        return View();
//}   
}

    
