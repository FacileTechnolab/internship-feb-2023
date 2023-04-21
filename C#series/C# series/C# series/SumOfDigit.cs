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
            int a, sum = 0, b;
            Console.WriteLine("Enter The First value  ..");
            a = Convert.ToInt32(Console.ReadLine());

            while (a > 0)
            {
                b = a % 10;
                sum = sum  + b;

                a=a / 10;
            }
            Console.WriteLine("reverse number is " + sum);
            Console.ReadLine();
        }
    }
}
