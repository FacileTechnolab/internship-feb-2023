using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Reverse
    {
        public void Rev()
        {


            // Array.Reverse(mynum);
            // Console.WriteLine("Reverse number");
            // foreach (int i in mynum)
            // {
            //     Console.WriteLine(i);
            //   }
            //Console.ReadLine();
            int n, reve = 0, r;
            Console.Write("Enter a number: ");
            n = int.Parse(Console.ReadLine());
            while (n != 0)
            {
                r = n % 10;
                reve = reve * 10 + r;
                n /= 10;
            }
            Console.Write("Reversed Number: " + reve);
            Console.ReadLine();

        }
       

}
}
    

