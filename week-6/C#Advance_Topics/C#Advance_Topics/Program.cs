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

            //Events obj = new Events();
            //string results = obj.MyEvent("hello ");
            //Console.WriteLine(results);


            //var myAnonymousObj = new { Name = "John", Age = 32 };
            //Console.WriteLine(myAnonymousObj);
            ////Console.ReadLine();

            //var obj=new StringExtentions_Method();
            //obj.Engine("Dipali");
            //obj.Vehicle();
            //obj.Return();


            //Linq bo=new Linq();
            //bo.Details();


            //int[] arr = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};
            //Console.WriteLine(arr.Length);
            //Console.WriteLine(arr.Count());



            //Nullable_Type Null = new Nullable_Type();
            //Null.Get();

            //  Dynamic d= new Dynamic();
            //  d.Dynamically();
            //  // Main method


            //  // Calling addstr method
            //d.addstr("G", "G");
            //  d.addstr("Geeks", "forGeeks");
            //  d.addstr("Cat", "Dog");
            //  d.addstr("Hello", 1232);
            //  d.addstr(12, 30);

            //Exception handling
            try
            {
                int i = 60;
                int y = 0;
                int l = i /y;
            }
            catch (Exception e)
            {
                Console.WriteLine("value is not equal" + e.Message);
                throw e;
            }
            finally
            {
                Console.WriteLine("value is equal");
                Console.ReadLine();
            }


            Console.ReadLine();
        }
    }
}
