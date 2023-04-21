using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Reversenum
    {
        public void  Reverse()
        {
            int r, reverse = 0, m;
            Console.WriteLine("Enter Number:");
            r = int.Parse(Console.ReadLine());

            while (r != 0)
            {
                m = r % 10;
                reverse = reverse*10 + m;
                r /= 10;
            }
            Console.WriteLine("Reverse Number:"+ reverse);

            Console.ReadLine();
        }
    }
}
