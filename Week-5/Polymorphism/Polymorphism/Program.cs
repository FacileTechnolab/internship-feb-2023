using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
     class Program
    {
        static void Main(string[] args)
        {
            //method-overriding
            Dog d = new Dog();
            d.eat();
            Console.ReadLine();
            //

            //seald-class
            Seald seald = new Seald();
            int total = seald.Add(52, 11);
            Console.WriteLine("Total = " + total);
            Console.ReadLine();
            //

            //interface
            Pig p = new Pig();
            p.animalSound();
            Console.ReadLine();
            //
        }
    }
}
