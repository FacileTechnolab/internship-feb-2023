using AspnetMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspnetMvc.Controllers
{
    public class AccountController : Controller
    {
        Appdb db = new Appdb();
        // GET: Account
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
        public ActionResult Signin(User user)
        {
			var obj = db.Users.Where(x => x.email == user.email && x.password == user.password).FirstOrDefault();
			if (user != null)
			{
				Session["email"] = obj.email;
				Session["username"] = obj.username;
				TempData["LoginSuccessMessage"] = "<script>alert('Login Successful')";
				return RedirectToAction("Home", "Home");
			}
			else
			{
				ViewBag.ErrorMessage = "<script>alert('Login Incorrect')";
			}
			return View();
		}
          
        //{
        //    if(string.IsNullOrEmpty(user.firstname))
        //    {
        //        ModelState.AddModelError("firstname", "Please Enter your FirstName");
        //    }
        //    if (string.IsNullOrEmpty(user.lastname))
        //    {
        //        ModelState.AddModelError("lastname", "Please Enter your LastName");
        //    }
        //    if (string.IsNullOrEmpty(user.username))
        //    {
        //        ModelState.AddModelError("username", "Please Enter your UserName");
        //    }
        //    if (string.IsNullOrEmpty(user.email))
        //    {
        //        ModelState.AddModelError("email", "Please Enter your Email");
        //    }
        //    if (string.IsNullOrEmpty(user.email))
        //    {
        //        ModelState.AddModelError("email", "Please Enter your Email");
        //    }
        //    if (string.IsNullOrEmpty(user.password))
        //    {
        //        ModelState.AddModelError("password", "Please Enter your Password");
        //    }
        //    //if (!string.IsNullOrEmpty(user.confirmpassword != user.password))
        //    //{
        //    //}
        //    //else
        //    //{
        //    //    ModelState.AddModelError("confirmpassword", "Please Try agin your Password is not match");
        //    //}
        //    if (ModelState.IsValid)
        //    {
        //        return RedirectToAction("Home");

        //    }
        //    return View(user);


        [HttpPost]
        public ActionResult Signup(User user) 
        { 
            if (ModelState.IsValid)
            {


                db.Users.Add(user);
                db.SaveChanges();
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