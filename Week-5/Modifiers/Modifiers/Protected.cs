using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modifiers
{
     class Protected
    {


        protected int x;
        public void value ()
        {
            x = 10;
            Console.WriteLine(x);

        }
        public void Animal()
        {
            Console.WriteLine("here are protected fields");
        }
    }
}
