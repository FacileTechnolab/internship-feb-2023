using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modifiers
{
    internal class Program
    {
        static void Main(string[] args)
        {

            var obj = new Public();
            obj.id = 1;
            obj.name = "shivangi";
            obj.Vehicle();

            Console.WriteLine(obj.name);
            Console.ReadLine();
            var obj2= new Car();
            obj2.Company(2,"shivangi");

        }
    }
}
