using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpAdvance
{
    public class Delegate
    {
        public delegate void addnum(int a, int b);
        public delegate void subnum(int a, int b);


        public void sum(int a , int b)
        {
            Console.WriteLine("(120 + 20) = " +( a + b));
        }
        public void subtract(int a , int b)
        {
            Console.WriteLine("(120 - 20) = " +( a - b));
        }

    }
}
