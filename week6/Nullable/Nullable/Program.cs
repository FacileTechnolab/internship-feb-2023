using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nullable
{
    public class Program
    {
        static void Main(string[] args)
        {
            Nullable<int> n = null;
            Console.WriteLine(n.GetValueOrDefault());
            int? n1 = 47;
            Console.WriteLine(n1.GetValueOrDefault());
            int? n3 = null;
            Console.WriteLine(n3.GetValueOrDefault());
            
            dynamic name = "jahanvi";
            name = 10;
            Console.WriteLine(name);
            Console.ReadLine();


        }
    }
}
