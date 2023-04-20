using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter number");
            int number = Convert.ToInt16(Console.ReadLine());


            if (number % 2 == 0)
            {
                Console.WriteLine("even");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("odd");
                Console.ReadLine();
            }

        }
    }
}
    
