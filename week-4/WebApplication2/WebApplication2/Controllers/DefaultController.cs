using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace WebApplication2.Controllers
{

    public class DefaultController : Controller
    {
       

        public ActionResult hello()
        {
            return Content("hello i am ");

        }
        [Route("student/{id:int}")]


        public ActionResult helly(int id)

        {
            return Content("id is " + id);


        }
        [Route("student/{name}")]
        public ActionResult Index(String name)
        {

            // return View();
            //return Content("Index");
            // return HttpNotFound();
            // return new EmptyResult();
            //return RedirectToAction("Index", "Home", new { page=1});    
            return Content("name is " + name);

          

        }
    }
}