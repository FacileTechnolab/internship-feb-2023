using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccModifidemoC_Inter
{
    public class Parent
    {
        private int value;

        public void setValue(int v) 
        {
            value = v;
        }
        public int getValue() 
        { 
            return value; 
        } 
    }
}
