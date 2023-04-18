using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace firstproject.Controllers
{
    [Route("index")]
    public class HomeappController : Controller
    {
        [Route("home")]
        public ActionResult random()
        {
             // return View();
            return Content("This is Content Method ");
            //  return HttpNotFound();
            //return new EmptyResult();
           // return RedirectToAction("random", "Home");
            // return Content("hello");

        }

        private ActionResult RedirectToAction()
        {
            throw new NotImplementedException();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult dindex(int id)
        {
            // return Content("Index");
            return Content("id is " + id);
        }
        public ActionResult Error(int? pageIndex, String sortBy)
        {
            if (!pageIndex.HasValue)
                pageIndex = 8;
            if (String.IsNullOrEmpty(sortBy))
                sortBy = "name";
            return Content(String.Format("pageIndex={0}& sortby={1}",pageIndex,sortBy));
        }
    }
}