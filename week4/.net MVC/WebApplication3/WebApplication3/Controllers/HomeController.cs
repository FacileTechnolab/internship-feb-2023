using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        static void main(string[] args)
        {
            task1();
            task2();
            task3();
            Console.ReadLine();
        }
        //public ActionResult Index()
        //{
        //    return View();
        //}

        //public ActionResult About()
        //{
        //    ViewBag.Message = "Your application description page.";

        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}
        public static async void task1()
        {
            await Task.Run(() =>
            {
                Console.WriteLine("task1 is starting..");
                Thread.Sleep(5000);
                Console.WriteLine("task is completed");

            });
           
        }
        public static async void task2()
        {
            await Task.Run(() => {
                Console.WriteLine("task2 is starting..");
                Thread.Sleep(1000);
                Console.WriteLine("task2 is completed");
            });
           
        }
        public static async void task3()
        {
            await Task.Run(() =>
            {
                Console.WriteLine("task3 is starting..");
                Thread.Sleep(2000);
                Console.WriteLine("task3 is completed");
            });
           
        }

    }
}