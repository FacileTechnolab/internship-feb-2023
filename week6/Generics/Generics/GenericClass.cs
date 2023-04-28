using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generics
{

    class Generic<T>
    {
        T box;




        
        public Generic(T b)
        {
            this.box = b;
            Console.WriteLine("data is " + this.box);
        }
      
    }
    class GenericClass

    {
        public void Show()
        {
            Generic<int> e = new Generic<int>(20);
           
        }
    }
}
