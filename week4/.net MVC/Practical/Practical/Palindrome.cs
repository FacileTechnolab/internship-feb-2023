using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Palindrome
    {
        public void Drom()
        {
            int number = 121;
            int temp, sum = 0;
            int r = 0;
            temp = number;
            Console.WriteLine(number);
            while (number > 0)
            {
                r = number % 10;
                sum = (sum * 10) + r;

                number = number / 10;
            }
                if (temp == sum)
                {
                    Console.WriteLine("palindrome number");
                }
                else
                {
                    Console.WriteLine(" not palindrome number");
                }
                Console.ReadLine();
            }
        }
    }
