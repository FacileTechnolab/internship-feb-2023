using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Services;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace C_series
{
    internal class Primenum
    {
        public void Prime()
        {
            int num;
            int count = 0;
            Console.WriteLine("Enter Number:");
            num= int.Parse(Console.ReadLine());

            for(int i = 1; i<=num; i++)
            {
                if(num % i == 0)
                {
                    count++;
                }
            }
            if(count==2)
            {
                Console.WriteLine("Is Prime Number");
            }
            else
            {
                Console.WriteLine("Not Prime Number");
            }
            Console.ReadLine();
        }
    }
}
