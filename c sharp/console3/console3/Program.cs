// See https://aka.ms/new-console-template for more information
using System;
namespace Hello
{
    class Hi
    {
        static void Main(string[]args)
        {/*
            Console.WriteLine("Enter the user name :...");
            string name = Console.ReadLine();
            Console.WriteLine("name is " + name);
            Console.WriteLine("Hello, World!");
            int s = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("value is "+s);
            for(int i = 0; i < 5; i++)
            {
                

                  for(int j=0;j<i;j++)
                  {
                    Console.WriteLine("=");
                  }

            }
            int h= 0;
            do
            {
                Console.WriteLine("hello "+h);
                h++;
                    

            } while(h < 10);

            int k = 0;
            while (k < 9)
            {
                Console.WriteLine("k is " + k);
                k++;

            }*/
            int sum;
            for(int i=0; i<20; i++)
            {
                if(i%3 ==0)
                {
                    Console.WriteLine("sum is "+i);
                }
            }
            var employee=new List<int>();
            employee.Add(1);
                employee.Add(2);
            employee.Add(3);
            employee.Add(4);
               employee.Add(5);
            employee.Add(6);
            foreach(int i in employee) {
                Console.WriteLine(i);
            }
            var car=new List<string>();
            car.Add("hello");
            car.Add("hi");
            car.Add("hiii");
            foreach(string  i in car)
            {
                Console.WriteLine(i);
            }
            

        }
    }
}

