using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccModifidemoC_Inter
{
     class Program
    {
        
        static void Main(string[] args)
        {

            //public
            Console.WriteLine("-------public modifier-------");
            Student s = new Student(201, "ABC");
            Console.WriteLine("Id is :" + s.Id);
            Console.WriteLine("Name is :" + s.Name);
            Console.WriteLine("----------------------------");
            Console.WriteLine("Id is :" + s.getId());
            Console.WriteLine("Name is :"+  s.getName());
            Console.ReadLine();
            //

            //private
            Parent parent = new Parent();
            parent.setValue(4);
            Console.WriteLine("-------private modifier-------");
            Console.WriteLine("Value = " + parent.getValue());
            Console.ReadLine();
            //

            //protected
            X obj1 = new X();
            Y obj2 = new Y();
            Console.WriteLine("-------protected modifier-------");
            Console.WriteLine("Value of x is :" + obj2.getX());
            Console.ReadLine();
            // 

            //internal

            Complex c = new Complex();
            Console.WriteLine("-------internal modifier-------");
            c.setData(2, 3);
            c.displayData();
            Console.ReadLine();
            //

            //protected internal
            Console.WriteLine("-------protected internal modifier-------");
            Derived der = new Derived();
            der.Number = 2;
            Console.WriteLine("Value :" +  der.Number);

        }
    }
}
