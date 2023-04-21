using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Palindrome
    {
        public void drome() 
        {
            int num, temp , sum = 0, k;
            Console.WriteLine("Enter the value : ");
            num=Convert.ToInt32(Console.ReadLine());

            temp = num;
            while (num != 0)
            {
                k = num % 10;
                sum = (sum *  10) + k;
                num = num / 10;
            }
            if (temp == sum)
            {
                Console.WriteLine("it is Palindrom");
            }
            else
            {
                Console.WriteLine("it is not Palindrom");
            }
            Console.ReadLine();
        }  
    }


}
