using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__Intermediate
{
    public class Accessmodifier
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
}
