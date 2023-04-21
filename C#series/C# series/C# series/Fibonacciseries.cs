using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class Fibonacciseries
    {
        public void Series()
        {
            int a, Answer,j=1,k=0;
            Console.WriteLine("Enter the number ....");
            a=Convert.ToInt32(Console.ReadLine());

            for(int i=0;i<a;++i)
            {
                Answer = k + j;
                Console.WriteLine(Answer);
                k = j;
                j = Answer;
                

            }
            Console.WriteLine("it is fibonaccie");
            Console.ReadLine();
           

        }
    }
}
