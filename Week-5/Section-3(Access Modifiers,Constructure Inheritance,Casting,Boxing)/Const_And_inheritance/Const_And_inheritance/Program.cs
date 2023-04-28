using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Const_And_inheritance
{
     class Program
    {
        static void Main(string[] args)
        {

            //var car=new Car("XYZ@123");

            Text text = new Text();
            Shape shape = text;

            shape.Drow();
           
            //text.width = 200;
            //shape.width = 100;
            //Console.WriteLine(text.width);
            // StreamReader streamReader = new StreamReader(new MemoryStream());



            //var list = new ArrayList();
            //list.Add(1);
            //list.Add("new Array");
            //list.Add(DateTime.Now);

            //var number = (int)list[1];
            //list.Add(new Text());

            //var anotherlist = new List<Shape>();
            //Console.ReadLine();

            // Shape shape = new Text();
        }

    }
}
