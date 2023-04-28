using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegates
{
    public delegate void Calculoation(int a, int b);
    public class DelegatePractice
    {
        public static void Addition(int a ,int b)
        {
            int result = a + b;
            Console.WriteLine(result);
        }
    }
}