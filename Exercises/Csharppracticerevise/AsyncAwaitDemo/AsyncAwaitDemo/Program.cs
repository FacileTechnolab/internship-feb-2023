using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncAwaitDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {

            //synchro
                Task1();
                Task2();
                Task3();
                Task4();

            //asynchro
            Console.ReadLine();

        }
        //synchro
        //public static void Task1()
        //{
        //    Console.WriteLine("Task1 Start...");
        //    Thread.Sleep(4000);
        //    Console.WriteLine("Task1 End...");

        //}
        //public static void Task2()
        //{
        //    Console.WriteLine("Task2 Start...");
        //    Thread.Sleep(2000);
        //    Console.WriteLine("Task2 End...");

        //}
        //public static void Task3()
        //{
        //    Console.WriteLine("Task3 Start...");
        //    Thread.Sleep(5000);
        //    Console.WriteLine("Task3 End...");

        //}
        //public static void Task4()
        //{
        //    Console.WriteLine("Task4 Start...");
        //    Thread.Sleep(1000);
        //    Console.WriteLine("Task4 End...");

        //}

        //asynchro
        public static async void Task1()
        {
            await Task.Run(() =>
            {
                Console.WriteLine("Task1 Start...");
                Thread.Sleep(4000);
                Console.WriteLine("Task1 End...");
            });
           
        }
        public static async void Task2()
        {
            await Task.Run(() =>
            {
                Console.WriteLine("Task2 Start...");
                Thread.Sleep(2000);
                Console.WriteLine("Task2 End...");
            });

        }
        public static async void Task3()
        {
            await Task.Run(() =>
            {
                Console.WriteLine("Task3 Start...");
                Thread.Sleep(5000);
                Console.WriteLine("Task3 End...");
            });

        }
        public static async void Task4()
        {
            await Task.Run(() =>
            {
                Console.WriteLine("Task4 Start...");
                Thread.Sleep(1000);
                Console.WriteLine("Task4 End...");
            });

        }
    }
}
