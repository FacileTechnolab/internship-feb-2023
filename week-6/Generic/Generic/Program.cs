
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic
{
    public class Customer<T>
    {
        public void displayData(T data)
        {
            Console.WriteLine("The data: " + data);
        }
    }
    public class Program
    {
        static void Main(string[] args)
        {
            Customer<string> customerName = new Customer<string>();
            customerName.displayData("Maurya");

            Customer<int> customerId = new Customer<int>();
            customerId.displayData(123);

            Console.ReadLine();
        }
    }
}
