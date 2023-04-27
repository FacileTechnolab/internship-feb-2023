using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Prime
    {
        public void FindPrime()
        {

            // int num,c=0;
            // Console.WriteLine("Enter number");

            //// num = Convert.ToInt32(Console.ReadLine());
            int n, num, b, i = 1;
            Console.WriteLine("enter the value: ");
            n = Convert.ToInt32(Console.ReadLine());
            num = n / 6;
            //i++;
            b = 6 * i;
            if (((b * num) + 1) == n || ((b * num) - 1) == n)
            {
                Console.WriteLine("it is a prime number....");
            }
            //else if (b + 2 == n)
            //{
            //    Console.WriteLine("it is a prime number....");
            //}
            else
            {
                Console.WriteLine("it is a not prime number....");
            }
            Console.ReadLine();
            Console.ReadLine();

            //if(num!=0 && num/2==0)
            //{
            //    Console.WriteLine("not prime", num);
            //}
            //else if(num/3==0 && num/5==0 && num/7==0 && num/11==0)
            //{
            //    Console.WriteLine("not prime", num);
            //}
            //else
            //{
            //    Console.WriteLine("prime");
            //}
            //Console.ReadLine();
            //}



            //    for (int i = 2; i <= num / 2; i++)
            //    {
            //        if (num % i == 0)
            //        {
            //            c++;
            //            break;
            //        }
            //    }
            //    if (c == 0 && num != 1)

            //    {
            //        Console.Write("{0} is a prime number.\n", num);
            //        Console.ReadLine();
            //    }

            //    else
            //    {
            //        Console.Write("{0} is not a prime number\n", num);
            //        Console.ReadLine();
            //    }
            //}





        }

    }
}