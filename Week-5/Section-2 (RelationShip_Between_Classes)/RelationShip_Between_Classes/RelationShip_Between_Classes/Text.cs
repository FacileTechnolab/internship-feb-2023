using System;

namespace RelationShip_Between_Classes
{
    public class Text : Inheritance
    {
        public int fontsize { get; set; }
        public string FontName { get; set; }

        public void AddHyperLink(string url)
        {
            Console.WriteLine("We added a url link "+url);
        }
    }
}
