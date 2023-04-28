using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    class Pig : AnimalType
    {
        public void animalSound()
        {
            Console.WriteLine("The pig says: wee wee");
        }
    }
}
