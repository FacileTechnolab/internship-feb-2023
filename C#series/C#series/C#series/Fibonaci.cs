using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Fibonaci
    {
        public  void Fibo(int range) 
        { 
            int a =0, b =1, c;
            while(a <= range) 
            {
                Console.WriteLine(a);
                c = a + b;
                a = b;
                b = c;   
            }
          
           
            Console.WriteLine("fibonaci series");
            Console.ReadLine();
        }
    }
}
