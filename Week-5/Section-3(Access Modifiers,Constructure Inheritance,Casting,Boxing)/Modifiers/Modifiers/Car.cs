using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modifiers
{
    public  class Car
    {
        private int id;
        private string name;

        public void Company(int Id,string Name)
        {
           id=Id;
            name=Name;

            
            Console.WriteLine("here are Private fields");
        }
        public int  GetValue()
        {
            return id;
        }
    }
   
}
