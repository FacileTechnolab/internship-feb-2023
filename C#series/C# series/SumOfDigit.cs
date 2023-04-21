using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class SumOfDigit
    {
        public void Sum()
        {
            int a, b;
            Console.WriteLine("Enter The First value  ..");
            a=Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter the Second value ....");
            b=Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("The Sum is = " + (a + b)+".");
        }
    }
}
