using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lambda
{
    public class Program
    {
        static void Main(string[] args)
        {
            Func<int, int, bool> val= (x, y) => x == y;


            Console.WriteLine(val(5, 7));
            Console.ReadLine();
        }
    }

}
