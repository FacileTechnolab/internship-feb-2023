using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generics
{
   public class Utilies<T> where T:IComparable,new()
    {
        public int Max(int a,int b)
        {
            return a > b ? a : b;
        }
        public void DoSomething(T value)
        {
            var obj=new T();
        }
        public T Max<T>(T a,T b) where T:IComparable
        {
            return a.CompareTo(b) > 0 ? a : b;  
        }
    }
}
