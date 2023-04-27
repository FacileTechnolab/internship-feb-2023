using System;

namespace Properties
{
    public class person
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public DateTime Birthdate { get; private set; }
        
        public person(DateTime birthdate)
        {
            Birthdate = birthdate;
        }
        public int Age
        {
            get 
            {
                var timeSpan = DateTime.Today - Birthdate;
                var years = timeSpan.Days / 365;
                return years;
            }
        }

    }
}
