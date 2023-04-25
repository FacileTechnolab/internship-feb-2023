using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classes
{
    internal class PresentationObject
    {
        public int height { set; get; }
        public int width { set; get; }
        public void copy()
        {
            Console.WriteLine("object copied to clpboard.");
        }
        public void Duplicate()
        {

            Console.WriteLine("object was duplicated");
        }
    }
}
