using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Events
{
    public class Program
    {
        static void Main(string[] args)
        {
            Extension obj = new Extension();


           
            Console.WriteLine(obj.Display());
            Console.WriteLine(obj.Print());
            obj.NewMethod();

            Console.ReadLine();
        }
    }
}
