using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Properties
{
    public class Program
    {
        static void Main(string[] args)
        {
            var Person = new person(new DateTime(2002, 2, 23));
            
            Console.WriteLine(Person.Age);
            Console.ReadLine();
        }
    }
}
