﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class Prime
    {
        public void Numbers()
        {
            Console.WriteLine("Enter the Value: ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("\n");

            if (n %2==0)
            {
                Console.WriteLine("Number is not Prime");
            }
            else if (n %2==1)
            {
                Console.WriteLine("Number is Prime");
            }
            
        }
    }
}
