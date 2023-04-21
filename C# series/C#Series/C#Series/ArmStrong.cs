using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class ArmStrong
    {
        public void Ast()
        {
            int p, q, sum = 0, temp;

            Console.WriteLine("Enter num : ");
            p = Convert.ToInt32(Console.ReadLine());

            temp = p;
            while (p > 0)
            {
                q = p % 10;
                sum = sum + (q * q * q);
                p = p / 10;

            }
            if (temp == sum)
            {
                Console.WriteLine("ArmStrong  " + temp);
            }
            else
            {
                Console.WriteLine("Not ArmStrong  " + temp);
            }
            Console.ReadLine();
        }

        //int p, q, sum = 0, temp;
        //    temp = 0;
        //    Console.WriteLine("Enter num : ");

        //    var inputnum = Console.ReadLine();
           
        //    var answer = 0;
        //    temp = answer;
        //    foreach (char c in inputnum)
        //    {

        //        int bar = c - '0';
        //        answer += (bar * bar * bar);
        //    }


        //    if (Convert.ToInt32(inputnum) == answer)
        //    {
        //        Console.WriteLine(" ArmStrong  ");
        //    }
        //    else
        //    {
        //        Console.WriteLine(" Not ArmStrong  ");
        //    }

        //}
    }
}
