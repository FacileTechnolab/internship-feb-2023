using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constandinherit
{
    class Program
    {
        static void Main(string[] args)
        {

            //const&inherit
            //Car car = new Car("XYZ12345");
            //Console.ReadLine();

            //upcast
                //Shape shp = new Shape();
                //Casting casting = shp;

                //StreamReader reader = new StreamReader(new MemoryStream());

                //var list = new ArrayList();
                //list.Add(11);
                //list.Add("dIPALI");
                //list.Add(new Shape());

                //var anotherList = new List<Shape>();
            //

            //downcast
            Casting cast = new Shape();
            Shape shp = (Shape) cast;

            //boxing
            int num = 2023;
            object obj = num;

            num = 100;

            Console.WriteLine("Value - type value of num : " + num);
            Console.WriteLine("Object - type value of obj : " + obj);
            Console.ReadLine();
            //

            //unboxing
            int unbox = 3000;
            Object obj2 = unbox;
            int i = (int)obj2;

            Console.WriteLine("Value - type value of num : " + obj2);
            Console.WriteLine("Value - type value of obj : " + i);
            Console.ReadLine();
            //




        }
    }
}
