using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classes
{
    public class Person
    {

        private DateTime _birthdate;
        public string Name;
        public DateTime Birthdate { get; set; }
        public int Age
        {
            get
            {
                var timespan = DateTime.Today - Birthdate;
                var years=timespan.Days/ 365;
                return years;
            }
        }

        public void SetBirthDate(DateTime birthdate)
        {
            _birthdate = birthdate;
        }
        public DateTime GetBirthDate()
        {
            return _birthdate;
        }
        public void Introduce(string to)
        {
            Console.WriteLine("hi {0}, I am {1}", to, Name);
        }
        public static Person Parse(string str)
        {
            var person = new Person();
            person.Name = str;
            return person;
        }
    }
}
