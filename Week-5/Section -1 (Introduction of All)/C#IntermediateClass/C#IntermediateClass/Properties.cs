using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_IntermediateClass
{

    class Person
    {
        public string Name{get; set;}
         public string UserName { get; set; }
         public DateTime Birthdate { get; private set; }
        public Person(DateTime birthdate)
        {
            Birthdate= birthdate;
        }
       

        public int Age
        {
            get
            {
                var timespan = DateTime.Now - Birthdate;
                var years = timespan.Days / 365;
                return years;

            }

        }
    }
    internal class Properties
    {

        public void Details()
        {

            //var person = new Person();
            //person.Birthdate = new DateTime(2002, 2, 23); 
            //Console.WriteLine(person.Age);
            //Console.ReadLine();

        }
    }
}
