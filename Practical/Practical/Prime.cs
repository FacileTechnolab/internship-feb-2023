using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical
{
    internal class Prime
    {
        public void FindPrime()
        {

            int num, i, c = 0;
            Console.WriteLine("Enter number");
            
            num = Convert.ToInt32(Console.ReadLine());
           
            for (i = 2; i <= num / 2; i++)
            {
                if (num % i == 0)
                {
                    c++;
                    break;
                }
            }
            if (c == 0 && num != 1) 
            {
                Console.Write("{0} is a prime number.\n", num);
                Console.ReadLine();
            }
               
            else
            {
                Console.Write("{0} is not a prime number\n", num);
                Console.ReadLine();
            }
        }
               
   
 

                
        }
        
    }
