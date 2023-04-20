using System;

namespace Hello
{
    public class Person
    {
        public string FirstName;
        public string LastName;
        
        public void Introduction() 
        { 
            Console.WriteLine("My Name is : " + FirstName+ " " + LastName);
        }
        
    }
}
