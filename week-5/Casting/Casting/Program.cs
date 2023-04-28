using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Casting
{
    public class Program
    {
        static void Main(string[] args)
        {
            Shape shape = new Test();
            Test test = (Test)shape;    

        }
    }
}
