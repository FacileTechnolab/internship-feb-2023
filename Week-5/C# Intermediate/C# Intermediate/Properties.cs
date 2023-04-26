using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__Intermediate
{
    public class Properties
    {
        public string Name { get; set; }
        public string UserName { get; set; }

        public DateTime Birthdate { get; private set; }

        public Properties(DateTime birthdate) 
        {
            Birthdate = birthdate;
        }

        public int Age
        {
            get 
            { 
                var timeSpan = DateTime.Today - Birthdate;
                var years = timeSpan.Days/365;

                return years;
            }

        }
    }
}
