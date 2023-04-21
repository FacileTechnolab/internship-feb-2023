using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class SumDigits
    {
        public void Sumnum()
        {
            int s, sum = 0, m;
            Console.WriteLine("Enter Number:");
            s = int.Parse(Console.ReadLine());  

            while (s > 0) 
            {
                m = s % 10;
                sum = sum + m;
                s = s / 10;
            }
            Console.WriteLine("Sum of Digits :" + sum);
            Console.ReadLine();
        }
    
        
    }
}
