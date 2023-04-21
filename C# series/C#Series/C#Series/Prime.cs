using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Prime
    {
        public void Pri() 
        {
            int num, prime = 1;
            Console.WriteLine("Enter Prime : ");
            num = Convert.ToInt32(Console.ReadLine());

            for (int i = 2; i < num; i++)
            {

                if (num % i == 0)
                {
                    prime = 0;
                    break;
                }
            }
            if (prime > 0)
            {
                Console.WriteLine("This number is Prime: " + num);
            }
            else
            {
                Console.WriteLine("This number is Not Prime: " + num);
            }
            Console.ReadLine();


        }
    }
}
