using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class SwapingNumbers
    {
        public  void Swap()
        {
           
            Console.WriteLine("Enter the Value of A : ");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\n");
            Console.WriteLine("Enter the second Value of B :");
            int b= Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\n");

            Console.WriteLine(" Before  Value of A " + a + "And " + b + ".");
            a = a + b;
            b = a - b;
            a = a - b;
            Console.WriteLine("\n");
            Console.WriteLine(" After Value of A " + a + "And " + b + ".");

        }
    }

}
