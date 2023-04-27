using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Casting
{
    public class CIrcle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Draw a circle");
            Console.ReadLine();
        }

    }
    public class Rectangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Draw a Rectangle");
            Console.ReadLine();
        }
    }
    public class Triangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Draw a Triangle");
            Console.ReadLine(); 
        }
    }
    public abstract class Shape
    {
        public int Height { get; set; }
        public int Width { get; set; }
       
   
        //public virtual void Draw()
        //{

        //}

        public abstract void Draw();
        public void copy()
        {
            Console.WriteLine("copy shape of clipboard");
        }
        public void select()
        {
                Console.WriteLine("select the shape");
        }

    }
}
