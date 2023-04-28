using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Events
{
    public static class Program2
    {
        public static void NewMethod(this Extension obj)
        {
            Console.WriteLine("I am Extended method");
        }
    }
}
