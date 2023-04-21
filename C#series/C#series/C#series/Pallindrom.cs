using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_series
{
    internal class Pallindrome
    {
        public void Palin()
        {
            string str = " ";

            Console.WriteLine("Enter String:");
            str = Console.ReadLine();

            char[] arr = str.ToCharArray();
            Array.Reverse(arr);
            string str_revrse = new string(arr);

            if (str.Equals(str_revrse))
            {
                Console.WriteLine("Palindrome Number");
            }
            else
            {
                Console.WriteLine("Not Palindrome Number");
            }

            Console.ReadLine();
        }
    }
}
