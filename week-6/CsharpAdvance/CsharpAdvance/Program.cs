using Microsoft.Azure.Amqp.Framing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static CsharpAdvance.Delegate;

namespace CsharpAdvance
{
     class Program
    {
        static void Main(string[] args)
        {
            //generic
            Generic<string> generic = new Generic<string>();
            generic.value = "sgldflkhgkflhj";

            Generic<float> version = new Generic<float>();
            version.value = 20.0F;

            Console.WriteLine(version.value);
            Console.WriteLine(generic.value);
     
            Console.ReadLine();
            //

            //delegates
            Delegate de = new Delegate();
            addnum del_obj1 = new addnum(de.sum);
            subnum del_obj2 = new subnum(de.subtract);
            del_obj1(120, 20);
            del_obj2(120, 20);
            Console.ReadLine();
            //

            //lambda
            Action<string> greet = name =>
            {
                string greeting = $"Hello {name}!";
                Console.WriteLine(greeting);
            };
            greet("World");
            Console.ReadLine();
            //

            //events
            //Events e = new Events();
            //string res = e.Myevent("Jack", "Science");
            //Console.WriteLine("RESULT...\n" + res);
            //

            //extensionmethod
            Extensionmethod extension = new Extensionmethod();
            extension.Display();
            extension.Description();
            extension.Newmethod();
            Console.ReadLine();
            //

            //LINQ
            var LI = new Bookrepo().GetLinqs();
            var chipbox = new List<Linq>();
            foreach(var link in LI)
            {
                if(link.Price< 10)
                chipbox.Add(link);
            }
            foreach (var link in chipbox)
            {
              Console.WriteLine(link.Title + " " + link.Price);
                Console.ReadLine();
            }
            

            //
        }
    }
}
