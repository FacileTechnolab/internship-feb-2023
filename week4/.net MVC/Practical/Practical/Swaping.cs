using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Swaping
    {
        public void Swap(int num1,int num2)
        {
           
            Console.WriteLine("\nEnter number a= " + num1);
            Console.WriteLine("Enter number b=" + num2);
            num1 = num1 + num2;
            num2 = num1 - num2;
            num1 = num1 - num2;


            Console.WriteLine("Enter number a= " + num1);
            Console.WriteLine("Enter number b=" + num2);


        }
    }
}

    

