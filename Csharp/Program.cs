using CsharpFundamentals.Math;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace demo
{
    internal class Program 
    {
        static void Main(string[] args)
        {
            // string inp = Console.ReadLine();

            // Console.WriteLine(inp);
            // Console.WriteLine("Hello World");
            // Console.WriteLine("Hello Krishika");
            // Console.Write("i love C#");

            //int a = 34;
            //float b = 34.4F;
            //double c = 34.4D;
            //bool isGreat = true;
            //char d = 'r';
            //string e = "this is a string";
            //Console.WriteLine(a);
            //Console.WriteLine(b);
            //Console.WriteLine(c);
            //Console.WriteLine(isGreat);
            //Console.WriteLine(d);
            //Console.WriteLine(e);

            //int x = (int)3.5;
            //double x1 = (double)3.5;
            //Console.WriteLine(x1);

            //int x = 3;
            //double y = 4;
            //float z = 'y';
            //float varr = Convert.ToInt64(3.55);
            //string sx = "44 is amazing";



            //Console.WriteLine(x);
            //Console.WriteLine(y);
            //Console.WriteLine(z);

            //Console.WriteLine("Enter your name");
            //string name = Console.ReadLine();
            //Console.WriteLine("Hey " + name + " its me! ");

            //Console.WriteLine("How many candy do you want?");
            //string can = Console.ReadLine();
            //Console.WriteLine("you will get 4 more candies: "+ 
            //    (Convert.ToInt32(can) + 4));

            //int a = Math.Max(34, 345);
            //double a = Math.Sqrt(36);
            //Console.WriteLine(a);

            //var mk = new Person();
            //mk.Fname = "Krishika";
            //mk.lName = "Maurya";
            //mk.Introduce();

            //Calculator calculator = new Calculator();
            //var result = calculator.Add(1, 2);
            //Console.WriteLine(result);
            //var numbers = new int[3];
            //numbers[0] = 1;

            //Console.WriteLine(numbers[0]);
            //Console.WriteLine(numbers[1]);
            //Console.WriteLine(numbers[2]);

            //var flags = new bool[3];
            //flags[0] = true;

            //Console.WriteLine(flags[0]);
            //Console.WriteLine(flags[1]);
            //Console.WriteLine(flags[2]);

            //var names = new string[3] {"Krishika", "dipal", "sweta"};

            //string[] days = { "Sunday", "Monday", "Tuesday", "wednesday" };//mynum={1,2,3,4,5};
            //for (int i=0; i<days.Length; i++)
            //Array.Sort(days);
            //foreach (string i in days)
            //{
            //    Console.WriteLine(i);
            //}
            //int[,] number = { { 1, 4, 7 }, { 2, 8, 9 } };
            //Console.WriteLine(number[1,2]);

            //{
            //    var firstName = "Krishika";
            //    var lastName = "Maurya";

            //    var fullName = firstName + "" + lastName;
            //    var myfullName = string.Format("My name is {1}", firstName, lastName);
            //    var name = new string[3] { "Krishika", "Jahanvi", "Dipali" };
            //    var formattednames = string.Join(",", name);
            //    Console.WriteLine(formattednames);
            //}

            //var a = 10;
            //var b = a;
            //b++;
            //Console.WriteLine(string.Format("a: {0}, b: {1}", a,b));

            //var array1 = new int[3] { 1, 2, 3};
            //var array2 = array1;
            //array2[0] = 0;
            //Console.WriteLine(string.Format("array1[0]: {0}, array2[0]: {1}" , array1[0], array2[0] ));

            /* condition statement*/
            int hour = 10;
            if( hour > 0 && hour < 12)
            {
                Console.WriteLine("its morning.");
            }
             else if (hour > 19 && hour < 18)
            {
                Console.WriteLine("its afternoon.");
            }
             else
            {
                Console.WriteLine("its evening.");
            }

            var season = Season.Autumn;
            switch(season)
            {
                case Season.Autumn:
                    Console.WriteLine("Its autumn and a beautiful season.");
                    break;

                case Season.Summer:
                    Console.WriteLine("Its perfect to go beach.");
                    break;

                default:
                    Console.WriteLine("I don't understand that season!");
                    break;
            }



            Console.ReadLine();
        }
    }
}
 