using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AuthonticationMvc.Controllers
{
    public class ActionParameterController : Controller
    {
        // GET: ActionParameter
        public ActionResult Index(int? pageIndex , string sortBy)
        {
            if(!pageIndex.HasValue)
                pageIndex = 2;
            if (String.IsNullOrWhiteSpace(sortBy))
                sortBy = "Name";
            return Content(String.Format("pageIndex={0}&sortBy{1}", pageIndex,sortBy));
            //return View();
        }

        // GET: ActionParameter/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ActionParameter/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ActionParameter/Create
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

        // GET: ActionParameter/Edit/5
        public ActionResult Edit(int id)
        {
            //return View();
            return Content("id=" + id);
        }

        // POST: ActionParameter/Edit/5
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

        // GET: ActionParameter/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ActionParameter/Delete/5
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
