using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ExtensionMethod
{
    public static class B
    {
        public static void NewMethod(this A ob)
        {
            Console.WriteLine("How are u!");
        }

    }
    public  class Program
    {
       
        static void Main(string[] args)
        {
                A ob = new A();
               Console.WriteLine( ob.Display());
            Console.WriteLine(ob.Print());
            ob.NewMethod();
              // Console.ReadKey();
            Console.ReadLine();

    }
    }
}
