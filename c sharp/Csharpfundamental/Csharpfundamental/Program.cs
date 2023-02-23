// See https://aka.ms/new-console-template for more information
using System;
namespace Fundamental
{
   public class Person
    {
        public int age;

    }

    class Csharpfundamental
    {
        static void Main(string[] args)
        {/*
            var a = 9;
            var b = a;
            b++;
            Console.WriteLine(string.Format("a:{0} , b:{1}", a, b));
            var array = new int[3] { 1, 2, 3 };
            var array2 = array;
            array2[0] = 3;
            Console.WriteLine(string.Format("array[0]:{0}, array2[0]:{1},array[0],array2[0]"));
            */
            var number = 1;
            Increments(number);
           Console.WriteLine(number);
            var person=new Person() { age=20};
            Old(person);
            Console.WriteLine(person.age);
            
            var random=new Random();
            for(var i=0;i<10;i++)
            
                Console.WriteLine(random.Next(1,10));
            
        }
        public static void Increments(int number) 
        {
            number += 10;

        }
        public static void Old(Person person)
        {
            person.age += 10;

        }

    }
}