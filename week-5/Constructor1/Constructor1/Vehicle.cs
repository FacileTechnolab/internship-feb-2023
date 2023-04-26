using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constructor1
{
    public class Vehicle
    {
        private readonly string _registrationNumber;
        //public Vehicle() {
        //    Console.WriteLine("vehicle is begin"); 
        //    Console.ReadLine();
        //}
        public Vehicle(string registrationNumber)
        {
            _registrationNumber = registrationNumber;
            Console.WriteLine("vehicle is being initialized{0}", registrationNumber);
        }
    }
}
