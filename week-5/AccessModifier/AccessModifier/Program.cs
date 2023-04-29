using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccessModifier
{
    public class Person
    {
        private DateTime _birthdate;

        public void SetBirthdate(DateTime birthdate)
        {
            _birthdate = birthdate;
        }
        public DateTime GetBirthdate()
        {
            return _birthdate;
        }
    }
    public class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetBirthdate(new DateTime(2023, 2, 23));
            Console.WriteLine(person.GetBirthdate());   
            
        }
    }
}
 