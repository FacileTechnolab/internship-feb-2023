using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Fibonaci
    {
        public void Fibo()
        {
            int d,f=0,g=1, num;
            Console.WriteLine("Enter Number ");
            num=Convert.ToInt32(Console.ReadLine());
             
            for (int i = 1; i < num; ++i)
            {
                d = f + g;
                Console.WriteLine(d);
                f = g;
                g = d;


            }
            Console.WriteLine("it's fibonaci");
            Console.ReadLine();
        }
    }
}
   
