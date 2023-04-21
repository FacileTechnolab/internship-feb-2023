using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class FactorialsNumbers
    {

       public void Num()
        {
            int x, fact = 1;
            Console.WriteLine("Enter a value ....");
            x=Convert.ToInt32(Console.ReadLine());
            for(int i = 1; i <=x; i++)
            {
                fact =fact*i;

             

            }
            Console.WriteLine("Answer is = " + fact);

            Console.ReadLine();
        }
    }
}
