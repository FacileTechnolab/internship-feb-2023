using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
   


    internal class Program
    {
        public int x;
        public Program(int X)
        {
            this.x = X;
            Console.WriteLine("data is " + this.x);
        }
        static void Main(string[] args)
        {
            //Program program = new Program(10);
            //GenericClass genericClass = new GenericClass();
            //genericClass.Details();



            //Delegate del= new Delegate();
            //del.Show();
            //Console.ReadLine();

            //Lambda_Experession lambda_Experession = new Lambda_Experession();
            //lambda_Experession.Show();

            Events obj = new Events();
            string results = obj.MyEvent("hello ");
            Console.WriteLine(results);
            Console.ReadLine();
        }
    }
}
