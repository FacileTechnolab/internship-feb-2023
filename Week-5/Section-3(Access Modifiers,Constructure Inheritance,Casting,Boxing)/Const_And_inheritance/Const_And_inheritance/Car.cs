using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Const_And_inheritance
{
    public class Car:Vehicle
    {
        public Car(string registrationNumber) 
            :base(registrationNumber)
        {

            Console.WriteLine("Car being initialized.{0}"+registrationNumber);
        }
    }
}
