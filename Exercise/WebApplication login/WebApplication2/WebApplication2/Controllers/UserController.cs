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
        AppDb db = new AppDb();
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
            var obj=db.Users.Where(x=>x.Email == users.Email && x.Password == users.Password).FirstOrDefault();
            if(users!=null)
            {
                Session["Email"] = obj.Email;
                Session["User"] = obj.User;
                TempData["LoginSuccessMessage"] = "<script>alert('Login Successful')";
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ViewBag.ErrorMessage = "<script>alert('Login Incorrect')";
            }
            return View();
        }
        //public ActionResult Signup()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}
        [HttpPost]
        public ActionResult Signup(Users users)
        {
            if (ModelState.IsValid)
            {


                db.Users.Add(users);
                db.SaveChanges();
            }

            return View();
        }
        public ActionResult SignOut()
        {
            Session.Abandon();
            return RedirectToAction("Index", "Home");
        }
    }

}




