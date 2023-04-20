using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //ODD AND EVEN
            //Console.WriteLine("Enter number");
            //int number = Convert.ToInt16(Console.ReadLine());
            //if (number % 2 == 0)
            //{
            //    Console.WriteLine("even");
            //    Console.ReadLine();
            //}
            //else
            //{
            //    Console.WriteLine("odd");
            //    Console.ReadLine();
            //}


            //MAX AND MIN
            //int a = 30;
            //int b = 20;
            //int temp;
            //MaxMinBase n = new MaxMinBase();
            //temp = n.FindMax(a, b);
            //Console.WriteLine("max value is {0}", temp);
            //Console.ReadLine();


            ////SwApping
            //Swaping s = new Swaping();
            //s.Swap();
            //Console.WriteLine();
            //Console.ReadLine();


            //Prime p = new Prime();
            //p.FindPrime();


            ////SUMOF DIGIT
            //SumofDigit s = new SumofDigit();
            //s.Sum();

            ////Reverse number
            //Reverse r = new Reverse();
            //r.Rev();

            //Factorial f = new Factorial();
            //f.Fact();

            //Palindrome p = new Palindrome();
            //p.Drom();

            //Armstrong a = new Armstrong();
            //a.armstrong();

            Fibonaci f = new Fibonaci();
            f.fibonacci();
        }
    }
}

    
