using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class swap
    {
        public void Swapnum()
        {
            int x, y;

            Console.WriteLine("Enter x = " );
            x= Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter y = " );
            y= Convert.ToInt32(Console.ReadLine());

            int Tempswap = x;
            x = y;
            y = Tempswap;
            Console.WriteLine("After Tempswap : x = " + x + " " + " y = " + y);
            Console.ReadLine();
         

        }
    }
}
