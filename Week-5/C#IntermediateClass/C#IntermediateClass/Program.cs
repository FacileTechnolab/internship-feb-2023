using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_IntermediateClass
{
    public class Person
    {
        public string Name;
        public void Introduction(string to)
        {
            Console.WriteLine("hi {0}, I  am {1}", to, Name);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            //var person = new Person();
            //person.Name = "shivangi";
            //person.Introduction("shah");
            //Console.ReadLine();
            Cunstrutor cunstrutor = new Cunstrutor();
            cunstrutor.Details();

        }
    }  
}
