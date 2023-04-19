using System;

namespace Practical
{
    internal class ReverseBase
    {
        public int Sort()
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