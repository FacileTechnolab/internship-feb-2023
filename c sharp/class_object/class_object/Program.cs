// See https://aka.ms/new-console-template for more information
using System;
namespace  Dom
{
    class Documents
    {
        string fname = "shivangi";
        String lname = "shah";

        public int Do()
                    {
              Console.WriteLine("hello");
            return 0;   
             }

        static void Main(String[] args)
        {
             Documents d=new Documents();
            d.Do();
            
            Console.WriteLine("name i s a"+(d.fname+d.lname)); 
        }
    }
}
