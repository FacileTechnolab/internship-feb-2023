using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Fibonaci
    {
        public void fibonacci()
        {
            int n1 = 0, n2 = 1, n3, num;
            Console.WriteLine("enter number");
            num = int.Parse(Console.ReadLine());
            for (int i = 2; i < num; ++i)
            {
                n3 = n2 + n1;
                Console.WriteLine(n3);
                n1 = n2;
                n2 = n3;

            }
            Console.WriteLine();
            Console.ReadLine();


        }
    }
}
