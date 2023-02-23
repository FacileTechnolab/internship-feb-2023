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
            //int hour = 10;
            //if( hour > 0 && hour < 12)
            //{
            //    Console.WriteLine("its morning.");
            //}
            // else if (hour > 19 && hour < 18)
            //{
            //    Console.WriteLine("its afternoon.");
            //}
            // else
            //{
            //    Console.WriteLine("its evening.");
            //}

            //var season = Season.Autumn;
            //switch(season)
            //{
            //    case Season.Autumn:
            //        Console.WriteLine("Its autumn and a beautiful season.");
            //        break;

            //    case Season.Summer:
            //        Console.WriteLine("Its perfect to go beach.");
            //        break;

            //    default:
            //        Console.WriteLine("I don't understand that season!");
            //        break;
            //}

            /* Iterations Statemants */
            //for (var i = 1; i <= 10; i++)
            //{
            //    if (i % 2 == 0)
            //    {
            //        Console.WriteLine(i);
            //    }
            //}

            //var name = "Krishika maurya";
            ////for (var i = 0; i < name.Length; i++) 
            ////{
            ////    Console.WriteLine(name[i]);
            ////}
            //foreach(var character in name)
            //{
            //    Console.WriteLine(character);
            //}

            //while(true)
            //{
            //    Console.WriteLine("Type your name:");
            //    var input = Console.ReadLine();
            //    if (!String.IsNullOrWhiteSpace(input))
            //    {
            //        Console.WriteLine("@Echo: "+input);
            //        continue;
            //    }
            //    break;
            //}

            //var random = new Random();
            //char[] buffer = new char[10];
            //for (var i = 0; i < 10; i++)
            //    Console.Write((char)('a'+ random.Next(97, 122)));


            /* Array */
            //var number = new[] { 1, 2, 4, 10, 8, 7 };
            //Console.WriteLine("Length:" + number.Length);

            //var index = Array.IndexOf(number, 4);
            //Console.WriteLine("Index of 4:" + index);

            //Array.Clear(number, 0, 3);
            //Console.WriteLine("Effect of clear()");
            //foreach(var n in number)
            //    Console.WriteLine(n);

            //int[] another = new int[3];
            //Array.Copy(number , another, 3);
            //Console.WriteLine("Effect of copy()");
            //foreach (var n in another)
            //    Console.WriteLine(n);

            //Array.Sort(number);
            //Console.WriteLine("Effect of Sort()");
            //foreach (var n in number)
            //    Console.WriteLine(n); 

            /* List */
            // var numbers = new List<int>() { 1,2,3,4,5};
            //numbers.Add(1);
            //numbers.AddRange(new int[3] { 6, 7, 8 });

            //foreach (var number in numbers)
            //    Console.WriteLine(number);

            //Console.WriteLine();
            //Console.WriteLine("Index of 2:" + numbers.IndexOf(1));
            //Console.WriteLine("Last Index of 1 :" + numbers.LastIndexOf(1));

            /* Date & Time */
            //var dateTime = new DateTime(2023, 2, 23);
            //var now = DateTime.Now;
            //var today = DateTime.Today;

            //var tomorrow = now.AddDays(1);
            //var yesterday = now.AddDays(-1);

            //Console.WriteLine(now.ToLongDateString());
            //Console.WriteLine(now.ToShortDateString());
            //Console.WriteLine(now.ToLongTimeString());
            //Console.WriteLine(now.ToShortTimeString());
            //Console.WriteLine(now.ToString("yyyy-MM-dd HH:mm"));

            //var timeSpan = new TimeSpan(1, 2, 3);
            //var timeSpan1 = new TimeSpan(1, 0, 0);
            //var timeSpan2=TimeSpan.FromSeconds(1);
            // var start = DateTime.Now;
            //var end =DateTime.Now.AddMinutes(2);
            //var duration = end - start;
            //Console.WriteLine("Duration:" + duration);

            //Console.WriteLine("Minutes:" + timeSpan.Minutes);
            //Console.WriteLine("Total Minutes:" + timeSpan.TotalMinutes);

            //Console.WriteLine("Add Example:" + timeSpan.Add(TimeSpan.FromMinutes(8)));
            //Console.WriteLine("Subtract Example:" + timeSpan.Subtract(TimeSpan.FromMinutes(2)));

            //Console.WriteLine("ToString" + timeSpan.ToString());
            //Console.WriteLine("Parse:" + TimeSpan.Parse("01:02:03"));


            /* String */

            //var fullName = "Maurya Krishika";
            //Console.WriteLine("Trim: '{0}'", fullName.Trim());
            //Console.WriteLine("ToUpper: '{0}'", fullName.Trim().ToUpper());

            //var index = fullName.IndexOf('s');
            //Console.WriteLine(index);
            ////var firstName = fullName.Substring(0, index);
            ////var lastName= fullName.Substring(index + 1);    
            ////Console.WriteLine("firstName:"+ firstName);
            ////Console.WriteLine("LastName:" + lastName);

            //var names = fullName.Split('K');
            //Console.WriteLine("FirstName:" + names[0]);
            //Console.WriteLine("LastName:" + names[1]);

            //Console.WriteLine(fullName.Replace("Maurya", "Parmar"));

            //if (String.IsNullOrWhiteSpace(" "))
            //    Console.WriteLine("Invalid");

            //var str = "25";
            //var age = Convert.ToByte(str);
            //Console.WriteLine(age);

            //var price = 29.93f;
            //Console.WriteLine(price.ToString("C"));

            var builder = new StringBuilder("Hello World");
            builder
                .Append('-', 10)
                .AppendLine()
                .Append("Header")
                .AppendLine()
                .Append('-', 10)
                .Replace('-', '+')
                .Remove(0, 10)
                .Insert(0,new string('-', 10));




            Console.WriteLine(builder);
            Console.WriteLine("First Char:" + builder[0]);
        


            Console.ReadLine();

        }

    }
}
 