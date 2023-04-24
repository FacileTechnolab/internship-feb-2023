using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace C_IntermediateClass
{
    public class Customer
    {
        public int Id;

        public string Name;
        public List<Order> Orders;
        public Customer()
        {
            Orders = new List<Order>()
            {
                 new Order(){ Id = 1, Name="Bill"},
                new Order(){ Id = 2, Name="Steve"},
                new Order(){ Id = 3, Name="Ram"},
                new Order(){ Id = 4, Name="Abdul"}
            };
            Console.WriteLine(Order[0]); 
            Console.WriteLine(Orders[1]); 
            Console.WriteLine(Orders[2]); 
            Console.WriteLine(Orders[3]);

        }
        public Customer(int id)
            : this()
        {     
              

            this.Id = id;
        }
        public Customer(int id,string name)
               : this(id)
        { 
        
            this.Id = id;
            this.Name = name;
            
        }
        

    }
    public class Order
    {
        public int Id;
        public string Name;
    }
    internal class Cunstrutor
    {
        public void Details()
        {
            Customer constomer = new Customer();


            var order=new Order();

            constomer.Orders.Add(order);
         

            Console.WriteLine(constomer.Id);
            Console.WriteLine(constomer.Name);
            Console.ReadLine();
        }
        

    }
}
