using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Reverse
    {
        public int Rev()
        {

            int[] mynum = { 12, 16, 15, 13, 18 };
            Array.Reverse(mynum);
            foreach (int i in mynum)
            {
                Console.WriteLine(i);
            }



        }
       

}
}
    

