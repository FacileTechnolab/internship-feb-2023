using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Factorial
    {
        public void Fact() 
        {
            int no, fact = 1;
            Console.WriteLine("Enter Number");
            no = int.Parse(Console.ReadLine());

            for (int i = 1; i <= no; i++)
            {
                fact = fact * i;
            }

            Console.WriteLine("Factorial " + fact);
            Console.ReadLine();
        }
    }
}
