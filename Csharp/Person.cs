using System;

namespace demo
{
    public class Person
    {
        public string Fname;
        public string lName;

        public void Introduce()
        {
            Console.WriteLine("My name is " + Fname + " " + lName);  
        }
    }
}
