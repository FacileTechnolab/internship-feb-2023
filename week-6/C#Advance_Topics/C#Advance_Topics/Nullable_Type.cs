using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
     class Nullable_Type
    {
        public void Get()
        {
            //defining nullable type
            Nullable<int> val = null;
            Console.WriteLine(val.GetValueOrDefault());

            int? val2 = null;
            Console.WriteLine(val.GetValueOrDefault());

            int ? val3 = 234; 
            Console.WriteLine(val3.GetValueOrDefault());
        }
    }
}
