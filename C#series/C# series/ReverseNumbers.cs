﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__series
{
    internal class ReverseNumbers
    {
        public void Reverse ()
        {


            //int a, b=0;
            //Console.WriteLine("Enter the value ..");
            //a=Convert.ToInt32(Console.ReadLine());  
            //for(int i=0; i<a; i++) 
            //{

            //    b = b + a;

            //}
            //Console.WriteLine("reverse number is "+b);


            int[] b = { 1, 2, 3, 4, 5 };

            foreach(int y in b) 
                Console.WriteLine(y);

           Array.Reverse(b);
            Console.WriteLine("\n");
            foreach (int i in b)
               Console.WriteLine(i);
        }
    }
}
