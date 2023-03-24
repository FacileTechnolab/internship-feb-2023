using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace FirstMVCWebapp.Controllers
{
    public class ActionResultController : Controller
    {
        // GET: ActionResultController
        public ActionResult Index()
        {
            //return View();
            //return Content("this is my content");
            //return new EmptyResult();
            return RedirectToAction("index", "home1",new {page=1});
     
           

        }

        // GET: ActionResultController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ActionResultController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ActionResultController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ActionResultController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ActionResultController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ActionResultController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ActionResultController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
