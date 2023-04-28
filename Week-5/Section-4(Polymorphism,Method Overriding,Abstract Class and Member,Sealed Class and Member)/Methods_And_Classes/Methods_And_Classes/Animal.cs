using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Methods_And_Classes
{
    public  class Animal:Person
    {
        public override void Eat()
        {
            base.Eat();
            Console.WriteLine("Animal can eat some fruits...");
        }
    }
}
