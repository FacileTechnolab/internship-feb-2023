using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Armstrong
    {
        public void Arm() 
        {
            int n , r ,arm = 0 , c;
            Console.WriteLine("Enter Number:");
            n = int.Parse(Console.ReadLine());
            c = n;
            while (n > 0) 
            {
                r = n % 10;
                arm = + (r * r * r) + arm;
                n = n / 10;
            }
            if(c==arm)
            {
                Console.WriteLine("Amstrong");
            }
            else
            {
                Console.WriteLine("Not Armstrong");
            }
            Console.ReadLine();
        }
    }
}
