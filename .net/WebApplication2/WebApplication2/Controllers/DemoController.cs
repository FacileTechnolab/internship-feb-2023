using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class DemoController : Controller
    {
        // GET: Demo/Random
        // public ActionResult Random()
        //{
        //    var demo = new Models.Demo() { Name = "mk" };
        //   return View(demo);
        //   // return Content("HelloWorld!");
        //   // return HttpNotFound();
        //   // return new EmptyResult();
        //}
        //    public ActionResult Edit(int id) 
        //{
        //    return Content("id= " + id); 
        //}
        //public ActionResult Index(int? pageIndex, string sortBy)
        //{
        //    if (!pageIndex.HasValue)
        //        pageIndex = 1;
        //    if (String.IsNullorWhiteSpace(sortBy))
        //        sortBy = "Name";

        //    return Content(String.Format("pageIndex={0}&sortBy={1}", pageIndex, sortBy));

        //}
        //[Route("Demo/Release/{year}/{month:regex(\\d{4})}")]
        //public ActionResult ByReleaseYear(int year, int month)           
        //{
        //    return Content(year + "/" + month);


        // GET: Demo/Random
         public ActionResult Random()
        {
            var Demo = new Models.Demo() { Name = "mk" };
            var Customers = new List<Customer>
            {
                new Customer{ Name = "Customer 1"},
                new Customer{ Name = "Customer 2"}

            };
            return View( Demo);
        }


    }
}