// See https://aka.ms/new-console-template for more information
using System;

namespace Scope
{
    class Variable
    {
        static void Main(string[] args)
        {
            byte a = 1;
            var Count = 10;
           var totalprice = 20.95f;
            var character = 'a';
            var firstname = "shivangi";
            var isworking = false;

            Console.WriteLine(a);
            Console.WriteLine(Count);
            Console.WriteLine(totalprice);
            Console.WriteLine(character);
            Console.WriteLine(firstname);
            Console.WriteLine(isworking);
            Console.WriteLine("{0},{1}", byte.MaxValue,byte.MinValue);
        }
    }

}
