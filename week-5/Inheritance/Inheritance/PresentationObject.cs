using System;

namespace Inheritance
{
    public class PresentationObject
    {
        public int Width { get; set; }
        public int Height { get; set; }
        public void Copy()
        {
            Console.WriteLine("Object copies to clipboard.");
            Console.ReadLine();
        }
        public void Duplicate()
        {
            Console.WriteLine("Object was duplicate.");
            Console.ReadLine();
        }
    }
}