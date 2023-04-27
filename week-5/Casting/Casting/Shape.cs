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
        }

    }
    public class Rectangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Draw a Rectangle");
        }
    }
    public class Shape
    {
        public int Height { get; set; }
        public int Width { get; set; }
        public Position position { get; set; }
   
        public virtual void Draw()
        {

        }
    }
}
