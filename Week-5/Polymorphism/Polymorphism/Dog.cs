using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    public class Dog : MethodOverriding
    {
        public override void eat()
        {
            Console.WriteLine("Eatting Bread");
        }
    }
}
