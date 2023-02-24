// See https://aka.ms/new-console-template for more information
using System;
namespace ArrayL
{
    class ArrayandList
    {
        static void Main(string[] args)
        {
            var numbers = new[] { 1, 2, 3,4 };

            Console.WriteLine("length : "+numbers.Length);
            var index = Array.IndexOf(numbers, 2);

            Console.WriteLine("index of 4 is :" + index);
            Array.Clear(numbers, 0, 2);

            Console.WriteLine("effect of Clear()");

            foreach(var i in numbers)
                Console.WriteLine(i);

            int[] another = new int[3];

            Array.Copy(numbers, another, 3);
            Console.WriteLine("Effect of copy");
            foreach (int h in another)
                Console.WriteLine(h);

            Array.Sort(numbers);
            Console.WriteLine("effect of short");
                foreach(int j in numbers)
                    Console.WriteLine(j);

                Array.Reverse(numbers);

            Console.WriteLine("reverse of array");
            foreach(int l in numbers) 
                Console.WriteLine(l);
            int y = 64;
            Console.WriteLine(Math.Sqrt(y));                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        }
    }
}
