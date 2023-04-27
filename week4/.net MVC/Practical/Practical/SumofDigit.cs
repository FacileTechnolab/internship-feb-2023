using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class SumofDigit
    {
        public void  Sum()
        {
            int number, rem, sum=0;
            Console.WriteLine("enter number");
         
              number = int.Parse(Console.ReadLine());
           while(number  > 0)
            {
                rem = number % 10;
                sum = sum + rem;
                number = number / 10;
            }
            Console.WriteLine("sum digit " + sum);
            Console.ReadLine();



        }
    }
}

