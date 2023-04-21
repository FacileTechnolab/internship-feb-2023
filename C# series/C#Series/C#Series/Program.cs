using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Remoting.Services;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace C_Series
{
    internal class Program
    {
        static void Main(string[] args)
        {   //* Odd-Even
            //int num;
            //Console.WriteLine("Enter Number : ");

            //num = Convert.ToInt32(Console.ReadLine());

            //if (num %2 == 0) 
            //{
            //    Console.WriteLine("This number is Even." );
            //}
            //else
            //{
            //    Console.WriteLine("This number is Odd." );
            //}
            //Console.ReadLine();

            //* Swap Number
            //swap s =new swap();
            //s.Swapnum();

            ////Reverse number
            Reverse R = new Reverse();
            R.Rev();

            //*SumofDigit
            //SumDigit SD = new SumDigit();
            //SD.Sum();

            //*ArmStrong
            //ArmStrong AS = new ArmStrong();
            //AS.Ast();

            //*Factorial
            //Factorial FL = new Factorial();
            //FL.Fact();

            //*Palindrome
            //Palindrome PD = new Palindrome();
            //PD.drome();

            //*Fibonaci
            //Fibonaci FB = new Fibonaci();
            //FB.Fibo();

            //*Prime
            //Prime PN = new Prime();
            //PN.Pri();
        }
    }
}
