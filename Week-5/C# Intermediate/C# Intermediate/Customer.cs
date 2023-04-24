using System.Collections.Generic;

namespace C__Intermediate
{
    public class Customer
    {
        public int Id;
        public string Name;
        public List<Order> Orders;

        //default counstructor
        public Customer()
        {
            Orders = new List<Order>();
        }
        //parameter counstructor
        public Customer(int id)
            :this()
        {
            Id = id;
        }
        //parameter counstructor
        public Customer(int id, string name)
             : this()
        {
            Id = id;
            Name = name;
        }
    }
}
