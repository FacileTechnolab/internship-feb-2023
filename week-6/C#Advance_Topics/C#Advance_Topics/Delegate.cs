using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
   
    class Delegate
    {
        public int  invoke(int i ,string n) 
        {



            Console.WriteLine("this is .."+n);

            return i;
         

        }

        public delegate int myDelegate(int age,string Name);

        public void Show()
        {
            myDelegate d = new myDelegate(invoke);

            var del = d(22, "shivangi");

            Console.WriteLine(del);


          


        }

    }
}
