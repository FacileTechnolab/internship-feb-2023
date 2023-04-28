using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modifiers
{
 
    class Program 
     {
        static void Main(string[] args)
        {

            //var obj = new Public();
            //obj.id = 1;
            //obj.name = "shivangi";
            //obj.Vehicle();

            //Console.WriteLine(obj.name);
            //Console.ReadLine();
            //var obj2 = new Car();
            //obj2.Company(2, "shivangi");

            //var obj2 = new Protected();
            //var obj = new Y();

            //Console.WriteLine(obj.GetX());
            //Console.ReadLine();

            Internal i= new Internal();
            i.Value();
            Console.ReadLine();


       

        }
     }
}
