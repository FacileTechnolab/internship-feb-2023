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

            int[] mynum = { 12, 16, 15, 13, 18 };
            
            Array.Reverse(mynum);
            Console.WriteLine("Reverse number");
            foreach (int i in mynum)
            {
                Console.WriteLine(i);
              }
           Console.ReadLine();

        }
       

}
}
    

