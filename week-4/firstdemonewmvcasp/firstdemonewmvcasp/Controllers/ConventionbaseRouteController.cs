using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace firstdemonewmvcasp.Controllers
{
    public class ConventionbaseRouteController : Controller
    {
        public ActionResult ByRealeseDate(int year , int month) 
        {
            return Content(year + "/" + month);
        }
        // GET: ConventionbaseRoute
        public ActionResult Index()
        {
            return View();
        }

        // GET: ConventionbaseRoute/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ConventionbaseRoute/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ConventionbaseRoute/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ConventionbaseRoute/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ConventionbaseRoute/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ConventionbaseRoute/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ConventionbaseRoute/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
