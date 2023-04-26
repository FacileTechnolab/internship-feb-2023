using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace classes
{
   
    public  class Program
    {
        static void Main(string[] args)
        {
            var dbMigrate = new DbMigrator(new Logger());
            var logger = new Logger();
            var installer = new Installer(logger);
            dbMigrate.migrate();
            installer.Install();

            Example.Details();
            Console.WriteLine("User name:{0}   " +  Example.name);
            Console.WriteLine("last name:{1}   " + Example.lname);
            Console.WriteLine("User name:{2}   " + Example.id);



          var person = Person.Parse("John");
            person.Introduce("Jahanvi");
            person.Birthdate = new DateTime(2000, 8, 14);
            Console.WriteLine(person.Age);
            var text = new Text();
            text.width = 100;
            text.copy();

            var cookie = new HttpCookie();
            cookie["name"] = "Mosh";
            Console.WriteLine(cookie["name"]);
            //Person p = new Person();
            //p.Name="Jahanvi";
            //p.Introduce("Mosh");
            person.SetBirthDate(new DateTime(2000, 08, 14));
            Console.WriteLine(person.GetBirthDate());
           

            Customer customer = new Customer(1);
            customer.Orders.Add(new Order());
            customer.Orders.Add(new Order());
            customer.Promote();
            Console.WriteLine(customer.Orders.Count);
            Console.ReadLine();


        }
    }
}
