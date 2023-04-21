using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class SumDigit
    {
        public void Sum()
        {
            int x, y, sum=0;

            Console.WriteLine("enter value = ");
            x = Convert.ToInt32(Console.ReadLine());

            while (x > 0)
            {
                y = x %10;
                sum = sum + y;
                x = x/10;
            }
            Console.WriteLine("Sum Of Digit : " +  sum);
            Console.ReadLine();

            //Console.WriteLine("Enter y = ");
            //y = Convert.ToInt32(Console.ReadLine());

            //int Total;
            //Total = x + y;
            //Console.WriteLine("Sum Of Digit : " + Total);




        }
    }
}
