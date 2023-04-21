using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Reverse
    {
        public void Rev()
        {
            int[] num = { 15, 51, 21 }; 
        
            Array.Reverse(num);
            Console.WriteLine("Reverse Value : ");

            foreach (int i in num)
            {
                Console.WriteLine(i);
            }
            Console.ReadLine();
        }

    }
}
