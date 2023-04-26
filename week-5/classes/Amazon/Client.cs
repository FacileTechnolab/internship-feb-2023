using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classes
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
         
        public void Promote()
        {
            Console.WriteLine("Promote logic changed");
            var calculator = new RateCalculator();
            var rating = calculator.Calculator(this);
            Console.WriteLine("Promote logic changed");
            //var rating = CalculateRating(excludeOrders:true);
            //if (rating == 0)
            //    Console.WriteLine("promoted to Level1");
            //else  Console.WriteLine("Promoted to level2");
        }
        //protected int CalculateRating(bool excludeOrders)
        //{
        //    return 0;
        //}
    }
}
