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
            //int[] num = { 15, 51, 21 };

            //Array.Reverse(num);
            //Console.WriteLine("Reverse Value : ");

            //foreach (int i in num)
            //{
            //    Console.WriteLine(i);
            //}
            //Console.ReadLine();


            int n, reve = 0, r;
            Console.Write("Enter a number: ");
            n = int.Parse(Console.ReadLine());
            while (n != 0)
            {
                r = n % 10;
                reve = reve * 10 + r;
                n /= 10;
            }
            Console.Write("Reversed Number: " + reve);
            Console.ReadLine();
        }

    }
}
