using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace demo
{

    public class person
    {
        public string Fname;
        public string lname;

        public void intro()
        {
            Console.WriteLine($"my name is {Fname} {lname}");
        }
    }
    internal class Class1
    {
        public string name = "ram";
        private int health = 49;
        public int gethealth()
        {
            return health; 
        }
        public void sethealth(int h)
        {
            health = h;
        }
    }

}
