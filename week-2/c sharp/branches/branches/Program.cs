// See https://aka.ms/new-console-template for more information
using System;
namespace hello
{
    class Condition
    {
        static void Main(string[] args)
        {
            int i = 78;
            int j = 90;
            if (i == j)
            {
                Console.WriteLine("both numbers are equal");
            }
            
            else if(i < j)
            {
                Console.WriteLine("i is smaller then j ");


            }
            else
            {
                Console.WriteLine("There are not a equal number ");

            }
        }
    }
}
