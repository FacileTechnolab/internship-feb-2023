using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AuthonticationMvc.Controllers
{
    //[RouteArea("City")] // ROTES AREA
    //[RoutePrefix("Home")] //ROTES PRFIXES
    //[Route("{action=random}")] //Default Routes
    public class ActionResultController : Controller
    {

        // GET: ActionResult
        public ActionResult Random()
        {

            return Content("hello world");
            //return HttpNotFound();
            //return new EmptyResult();
            //return RedirectToAction("Index", "Home", new { page = 1 });
        }
        //ROUTE ATTRIBUTE
        // optional parameter & default value
        [Route("Student")] //Runt browser path o/p - /Student
        public string GetStudent()
        {
            return "All student records";
        }
        //[Route("Student/{Id}")] //Runt browser path o/p - /Student/4
        //public string GetStudent(int Id)
        //{
        //    return "Student with Id :" + Id;
        //}
        [Route("Student/Name/{Name=Dhruvil}")] //Runt browser path o/p - /Student/Name - Dhruvil
        public string GetStudent(string Name)
        {
            return "Student with Name :" + Name;
        }
        //[Route("Student/Name/{Name}")] //Runt browser path o/p - /Student/Name/ 
        //public string GetStudent(string Name)
        //{
        //    return "Student with Name :" + Name;
        //}
        //[Route("Student/Name/{Name?}")] //Runt browser path o/p - /Student/Name - /Student/Name/Divya
        //public string GetStudent(string Name)
        //{
        //    return "Student with Name :" + Name;
        //}

        //route contraints
        [Route("Student/{Id:int}")] //Runt browser path o/p - /Student/45
        //[Route("Student/{Id:int:min(2):max(20)}")] //Runt browser path o/p - /Student/2
        public string GetStudent(int Id)
        {
            return "Student with Id :" + Id;
        }
        //ROUTE ATTRIBUTE END



        public ActionResult Index()
        {
            return View();
        }

        // GET: ActionResult/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ActionResult/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ActionResult/Create
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

        // GET: ActionResult/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ActionResult/Edit/5
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

        // GET: ActionResult/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ActionResult/Delete/5
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
