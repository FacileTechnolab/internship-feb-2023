using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ExecptionHandling

{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                int j = 40;
                int k = 95;
                int l = j - k;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Catch called:" +  ex.Message);
                throw;
                
            }
            finally
            {
                Console.WriteLine("Finally called");
                Console.ReadLine();
            }   
        }
    }
}
