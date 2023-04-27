using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Factorial
    {
        public void Fact() 
        {
            int number,fact=1;
            Console.WriteLine("enter number");
            number = int.Parse(Console.ReadLine());
            for(int i=1;i<=number;i++)
            {
                fact = fact*i;
            }
            Console.WriteLine("factorial number  " +  fact);
            Console.ReadLine();

        }
    }
}
