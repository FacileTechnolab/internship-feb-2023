using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public class Person
    {
        public string name;
        public void Introduce(string to)
        {
            Console.WriteLine("HI {0}, I am {1}", to , name);  
        }
         public static Person Parse(string str )
         { 
            var person = new Person();  
            person.name = str;
            return person;
         }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            var person =Person.Parse("Krishika");
            person.Introduce ("Maurya");
            Console.ReadLine();
        }
    }
}
