using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
    internal class Lambda_Experession
    {

        public void Show()
        {
            // args=> expression
            //number=> number*number
            // ()=>...
            // x=>....
            // (x,y,z)=>...


            const int factor = 5;

            Func<int,int>multiper=n=>n*factor;

            var results = multiper(10);

            Console.WriteLine(results);
            //Func<int, int> square = number => number * number;
            //Console.Write(square(4));

        }


    }
}
