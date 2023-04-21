using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class Amstrong
    {
        public void Stone()
        {
            int i, b,  stone=0,temp;
            Console.WriteLine("Enter the Number... ");
              i=Convert.ToInt32(Console.ReadLine());
            temp = i;
            while(i>0)
            {
                b = i % 10;
                stone = stone  + (b * b * b);
                i = i / 10;
            }
            if(temp==stone)
            {
                Console.WriteLine("Number is Amstrong..");
            }
            else
            {
                Console.WriteLine("Number is not Amstrong..");
            }

            




        }
    }
}
