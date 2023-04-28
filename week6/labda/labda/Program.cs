using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace labda
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Func<int, int> square = num => num * num;

            Console.WriteLine("Square of number: " + square(5));
            Console.ReadLine();
        }
    }
}
