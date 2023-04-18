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
            task1();
            task2();
            task3();
            Console.ReadLine();
        }
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
