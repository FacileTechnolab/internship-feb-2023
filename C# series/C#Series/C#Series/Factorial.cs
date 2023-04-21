using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Factorial
    {
        public void Fact()
        {
            int m, sum = 1;

            Console.WriteLine("Enter the num : ");
            m=Convert.ToInt32(Console.ReadLine());
             
            for(int i = 1; i <= m; i++)
            {
                sum= sum* i;
            }
            Console.WriteLine(sum);
           Console.ReadLine();
        }
    }
}
