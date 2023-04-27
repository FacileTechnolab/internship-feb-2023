using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccModifidemoC_Inter
{
    public class Base
    {
        protected internal int Number;

    }
    class Abc
    {
        public void testAccess()
        {

           Base b = new Base();
            b.Number = 1;
           
        }
    }
}
