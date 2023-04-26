using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constructor1
{
    public class Car : Vehicle
    {
        public Car(string registrationNumber)
            : base("registrationNumber")
        {
            Console.WriteLine("car is begin initialized.{0}", registrationNumber);
            Console.ReadLine();
        }
    }
}
