using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Primenum
    {
        public void Prime()
        {
            int num;
            Console.WriteLine("Enter number:");
            num = Convert.ToInt32(Console.ReadLine());

            if (num % 2 == 0)
            {
                Console.WriteLine("Enter Number is not  Prime :" + num);
            }
            else
            {
                Console.WriteLine("Enter Number Prime :" + num);
            }
            Console.ReadLine();
        }
    }
}
