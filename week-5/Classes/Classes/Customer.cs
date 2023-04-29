using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Classes
{
    public class Customer
    {
        public int ID;
        public string Name;
        public List<Order> Orders;

        public Customer() 
        {
            Orders = new List<Order>();
        }
        public Customer(int id)
           
        {
            this.ID = id;
        }
        public Customer(int id, string name)
             : this(id)
        {
            this.ID = id;
            this.Name = name;
        }
    }
}
