using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Armstrong
    {

        public void armstrong()
        {

            int number, temp, r;
            int sum = 0;
            Console.WriteLine("enter number");
            number = int.Parse(Console.ReadLine());
            temp = number;
            while (number>0)
            {
                r = number % 10;
                sum = sum + (r * r * r);
                number = number / 10;

            }
            if (temp == sum)
            {
                Console.WriteLine("Armstrong number");
            }
            else
            {
                Console.WriteLine("not Armstrong number");
            }
            Console.ReadLine();
        }
    }
}