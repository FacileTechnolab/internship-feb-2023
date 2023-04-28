using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods_And_Classes
{
    public class Circle :Shape
    {
        public override void Draw()
        {
            base.Draw();
            Console.WriteLine("Draw a Circle");
        }

    }
    public class Rectangle : Car
    {
        

        public override void Select()
        {
        Console.WriteLine("hiiii..");
        }
    }



    public  class Shape
    {
        public int Height { get; set; }
        public int Width { get; set; }
      
        public virtual void Draw() { }
      
    }
}
