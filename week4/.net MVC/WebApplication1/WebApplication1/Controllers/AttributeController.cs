using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class AttributeController : Controller
    {
        // GET: Attribute
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ByReleaseDate(int year,int month)
        {
            return Content(year + "/" + month);
        }

        // GET: Attribute/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Attribute/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Attribute/Create
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

        // GET: Attribute/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Attribute/Edit/5
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

        // GET: Attribute/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Attribute/Delete/5
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
