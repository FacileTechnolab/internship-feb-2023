using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Swaping
    {
        public void Swap() 
        {
          
            int a = 10, b = 20;
            Console.WriteLine("Before Swap Number: a=" + a + " " + "b=" + b);
            a = a * b; //a = 200
            b = a / b; //b = 10
            a = a / b; //a = 20

            Console.WriteLine("After Swap Number: a=" + a + " " + "b=" + b);

            Console.ReadLine();
        }

    }
}
