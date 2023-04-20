using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Swaping
    {
        public void Swap()
        {
            int x = 10;
            int y = 20;

            Console.WriteLine("\nEnter number a= " + x);
            Console.WriteLine("Enter number b=" + y);
            x = x + y;
            y = x - y;
            x = x - y;


            Console.WriteLine("Enter number a= " + x);
            Console.WriteLine("Enter number b=" + y);


        }
    }
}

    

