using System;

namespace Inheritance
{
    public class Text : PresentationObject
    {
        public int FrontSize { get; set; }
        public string FrontName { get; set; }

        public void AddHyperlink(string url)
        {
            Console.WriteLine("We added a link to " + url);
            Console.ReadLine(); 
        }
    }
}
