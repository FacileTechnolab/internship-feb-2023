using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
    public static class Car
    {

        public static void Return(this StringExtentions_Method M)
        {
            Console.WriteLine("hi");

        }
        public static void Engine(this StringExtentions_Method M, string Name)
        {
            Console.WriteLine("this is a name" + Name);
        }

    }
}
