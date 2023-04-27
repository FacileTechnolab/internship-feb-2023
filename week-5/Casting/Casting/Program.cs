using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Casting
{
   public class Program
    {
        public static void Main(string[] args)
        {
            //Text text = new Text();
            //Shape shape = text;
            //text.Width = 500;
            //shape.Height = 200;
            //Console.WriteLine(text.Width);
            //Console.WriteLine(shape.Height);
            //Console.ReadLine();
            //***********UPCASTING****************
            //StreamReader reader = new StreamReader(new MemoryStream());
            //var list = new ArrayList();
            //list.Add(1);
            //list.Add("jahanvi");
            //Console.ReadLine();
            //list.Add(new Text());
            //var anotherList=new List<Shape>();
            //**************DOWNCASTING**********************
            //Shape shape = new Text();


            //************BOXING-UNBOXING*****************************
            //var list = new ArrayList();
            //list.Add(1);
            //list.Add("jahanvi");
            //list.Add(DateTime.Today);
            //var anotherList=new List<int>();
            //var names=new List<string>();
           
           //*********Method OVERRIDING*****************
           //var shapes=new List<Shape>();
           // shapes.Add(new CIrcle());
           // shapes.Add(new Rectangle());
           // shapes.Add(new Triangle());
           // var canvas=new canvas();
           // canvas.DrawShapes(shapes);


           // ***********ABSTRACT CLASS AND MEMBER*****************
           var circle=new CIrcle();
            circle.Draw();
            var rectangle=new Rectangle();
            rectangle.Draw();
        }
    }
}
