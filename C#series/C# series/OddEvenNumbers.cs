using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class OddEvenNumbers
    {
        public  void Numbers() 
        {
            Console.WriteLine("Enter the Value: ");
            int n=Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\n");

            if (n % 2 == 0)
            {
                Console.WriteLine("Number is Even.....");
            }
            else if (n % 2 != 0)
            {
                Console.WriteLine("Number is Odd.....");

            }
           
        }
    }
}
