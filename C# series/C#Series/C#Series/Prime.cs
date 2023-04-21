using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Prime
    {
        public void Pri() 
        {
            int  num;
            Console.WriteLine("Enter Prime : ");
            num = Convert.ToInt32(Console.ReadLine());

            if (num % 2 == 0)
            {
                Console.WriteLine("This number is Not Prime: ");
            }
            else
            {
                Console.WriteLine("This number is Prime: ");
            }
            Console.ReadLine();
        }
    }
}
