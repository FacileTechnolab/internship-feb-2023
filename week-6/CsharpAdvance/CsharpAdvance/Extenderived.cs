using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpAdvance
{
    public static  class Extenderived 
    {
        public static void Newmethod(this Extensionmethod ext)
        {
            Console.WriteLine("Hello i am new method");
        }
    }
}
