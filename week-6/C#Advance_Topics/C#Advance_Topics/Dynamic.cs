using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
   public class Dynamic
    {
        public void Dynamically()
        {
        

                // Dynamic variables
                dynamic value1 = "GeeksforGeeks";
                dynamic value2 = 123234;
                dynamic value3 = 2132.55;
                dynamic value4 = false;

                // Get the actual type of 
                // dynamic variables
                // Using GetType() method
                Console.WriteLine("Get the actual type of value1: {0}",
                                          value1.GetType().ToString());

                Console.WriteLine("Get the actual type of value2: {0}",
                                          value2.GetType().ToString());

                Console.WriteLine("Get the actual type of value3: {0}",
                                          value3.GetType().ToString());

                Console.WriteLine("Get the actual type of value4: {0}",
                                          value4.GetType().ToString());
           
        }
        public void addstr(dynamic s1, dynamic s2)
        {
            Console.WriteLine(s1 + s2);
        }

      
       

    }
}
