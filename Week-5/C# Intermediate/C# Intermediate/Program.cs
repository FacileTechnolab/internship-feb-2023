﻿using C__Intermediate;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace C__Intermediate
{
    public class Person
    {
        public string Name { get; set; }

        public void Introduce(string to)
        {
            Console.WriteLine("Hi {0} , I am {1}",to, Name);
        }

        public static Person Parse(string str)
        {
            var  person = new Person();
            person.Name = str;

            return person;
        }
      
    }

    class Program
    {
        static void Main(string[] args)
        {
            //class
            //var  person = Person.Parse("Test");
            //person.Introduce("Dipali");

            //counstructor
            var customer = new Customer(); //default counst call
            customer.Id = 1; //parameter counst call
            customer.Name = "Dipali";//parameter counst call
            Console.WriteLine(customer.Id);
            Console.WriteLine(customer.Name);

            var order = new Order();
            customer.Orders = new List<Order>();
            customer.Orders.Add(order);
            //counstructor-end

            //object-initializers
            //ObjInitializer obj = new ObjInitializer()
            //{
            //    autId = 1,
            //    autName = "Krishi Maurya",
            //    autValue = 201,
            //};
            //Console.WriteLine("Author Id :" + obj.autId);
            //Console.WriteLine("Author Name :" + obj.autName);
            //Console.WriteLine("Author Value :" + obj.autValue);

            //meth-2
            //SortedList obj = new SortedList()
            //    {
            //        {"b.201", 201 },
            //        {"b.301", 301 },
            //        {"b.401", 2201 },};

            //foreach (DictionaryEntry pair in obj)
            //{
            //    Console.WriteLine("{0} and {1}", pair.Key, pair.Value);
            //}

            //meth-3
            List<ObjInitializer> objIniti = new List<ObjInitializer>()
                {
                      new ObjInitializer { autId = 1, autName = "Dipali Kuhad ", autValue = 2001, Email ="dipi.kuhad@gmail.com"  },
                      new ObjInitializer { autId = 2, autName = "Krishika Maurya ", autValue = 2023, Email = "krishi.maurya@gmail.com" },
                      new ObjInitializer { autId = 3, autName = "Shivangi Shah ", autValue = 2022, Email = "shivangi.shah@gmail.com" },
                      new ObjInitializer { autId = 4, autName = "Jahnvi Parmar ", autValue = 2021, Email = "jahanvi.parmar@gmail.com" }
                };

            foreach (ObjInitializer obj in objIniti)
            {
                Console.Write(obj.autId + " ");
                Console.Write(obj.autName + " ");
                Console.Write(obj.autValue + " ");
                Console.Write(obj.Email + " ");
                Console.WriteLine();
            }
            //object-initializers-end
            Console.ReadLine();

        }
    }
}
