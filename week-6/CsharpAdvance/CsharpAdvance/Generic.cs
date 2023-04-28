using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpAdvance
{
    public class Generic<T>
    {
        private T data;
        public T value
        {
            get
            {
                return this.data;
            }

            set
            {
                this.data = value;
            }
        }

       
    }
}
