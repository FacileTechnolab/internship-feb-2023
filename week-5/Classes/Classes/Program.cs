using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    //public class Person
    //{
    //    public string name;
    //    public void Introduce(string to)
    //    {
    //        Console.WriteLine("HI {0}, I am {1}", to , name);  
    //    }
    //     public static Person Parse(string str )
    //     { 
    //        var person = new Person();  
    //        person.name = str;
    //        return person;
    //     }
    //}
    public class Program
    {
        static void Main(string[] args)
        {
            //var person =Person.Parse("Krishika");
            //person.Introduce ("Maurya");
            //Console.ReadLine();

            var customer = new Customer();
            customer.ID = 1;
            customer.Name = "Krishika";

            var order = new Order();
            //customer.Orders = new List<Order>();
            customer.Orders.Add(order);

            Console.WriteLine(customer.ID);
            Console.WriteLine(customer.Name);  
            Console.ReadLine();
        }

    }
} 
