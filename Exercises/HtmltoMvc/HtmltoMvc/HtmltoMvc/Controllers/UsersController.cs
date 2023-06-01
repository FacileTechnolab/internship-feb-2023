using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HtmltoMvc.Models;

namespace HtmltoMvc.Controllers
{
    //[Authorize]
    public class UsersController : Controller
    {
       
        DataContext db = new DataContext();
        public ActionResult Login()
        {

            return View();
        }
        [HttpPost]
        public ActionResult Login(User user)
        {
            var users = db.Users.Where(model => model.UserName == user.UserName && model.Password == user.Password).FirstOrDefault();
            if(users != null)
            {
                Session["UserId"] = users.UserId;
                Session["Username"] = users.UserName;
                TempData["LoginSuccessFullMessage"] = "<script>alert('Login successfully!!')</script>";
                return RedirectToAction("Index" , "Home");
            }
            else
            {
                ViewBag.ErrorMessage = "<script>alert('Username or password incorrect!!')</script>";
                return View();
            }
          
        }
        public ActionResult Signup()
        {

            return View();
        }
        [HttpPost]
        public ActionResult Signup(User user)
        {
            if(ModelState.IsValid == true)
            {
                db.Users.Add(user); //insert data
               int a = db.SaveChanges();  //save data
                if(a > 0)
                {
                    ViewBag.InsertMessage = "<script>alert('Signup successfully!!')</script>";
                    ModelState.Clear();
                }
                else
                {
                    ViewBag.InsertMessage = "<script>alert('Signup Faild!!')</script>";
                }
            }
            return View();
        }
        public ActionResult Signout()
        {
            Session.Abandon();
            return RedirectToAction("Home", "Home");
        }

    }
}