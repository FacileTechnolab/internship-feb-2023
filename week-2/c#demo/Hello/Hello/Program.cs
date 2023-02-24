using System;
using Hello.Math;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace Hello
{
    class Program
    {
        public static void Main(string[] args)
        {
            /* var nm = new Person();
             nm.FirstName = "Dipali";
             nm.LastName = "Kuhad";
             nm.Introduction();

             Console.WriteLine("Addition of two number:");
             Calculator cal = new Calculator();
             var result = cal.Add(4, 6);
             Console.WriteLine(result);

             //array
             Console.WriteLine("Array of Elements:");
             var number = new int[3];
             number[0] = 1;
             Console.WriteLine(number[0]);
             Console.WriteLine(number[1]);
             Console.WriteLine(number[2]);

             var flags = new bool[3];
             flags[0] = true;
             Console.WriteLine(flags[0]);
             Console.WriteLine(flags[1]);
             Console.WriteLine(flags[2]);

             var names = new string[3] { "Krishika", "Dipali", "Sweta" };
             Console.WriteLine(names[0]);
             Console.WriteLine(names[1]);
             Console.WriteLine(names[2]);


             Console.WriteLine("Array through for loop");
             string[] car = { "Volvo", "BMW", "Ford", "Mazda" };
             for (int i = 0; i < car.Length; i++)
             {
                 Console.WriteLine(car[i]);
             }
             foreach (string i in car)
             {
                 Console.WriteLine(i);
             }
             Console.WriteLine("Array through sort method");
             int[] sortarray = { 7, 4, 2, 9 };
             Array.Sort(sortarray);
             foreach (int i in sortarray)
             {
                 Console.WriteLine(i);
             }
             Console.WriteLine("Array through multidimensional array");
             int[,] twoDimension = { { 1, 2, 9 }, { 4, 5, 6 } };
             Console.WriteLine(twoDimension[1,2]);
             Console.WriteLine(twoDimension[0,1]);
             Console.WriteLine(twoDimension[1,1]);
             //Console.WriteLine("array through multidimensional array in foreach");
             //foreach (int i in twoDimension)
             //{
             //    Console.WriteLine(i);
             //}
             //int Rows = Convert.ToInt32(Console.ReadLine());
             //int Columns = Convert.ToInt32(Console.ReadLine());

             //int[,] Matrix1 = new int[Rows, Columns];
             //int[,] Matrix2 = new int[Rows, Columns];
             //int[,] ResultMatrix = new int[Rows, Columns];

             //Console.WriteLine("\nEnter Elements of 1st Matrix:");
             //for (int i = 0; i < Rows; i++)
             //{
             //    for (int j = 0; j < Columns; j++)
             //    {
             //        Matrix1[i, j] = Convert.ToInt32(Console.ReadLine());
             //    }
             //}
             //Console.WriteLine("\nEnter Elements of 2nd Matrix:");
             //for (int i = 0; i < Rows; i++)
             //{
             //    for (int j = 0; j < Columns; j++)
             //    {
             //        Matrix2[i, j] = Convert.ToInt32(Console.ReadLine());
             //    }
             //}
             //Console.WriteLine("\nSum of Both the Matrics:");
             //for (int i = 0; i < 2; i++)
             //{
             //    for (int j = 0; j < 3; j++)
             //    {
             //        ResultMatrix[i, j] = Matrix1[i, j] + Matrix2[i, j];
             //        Console.Write($"{ResultMatrix[i, j]} ");
             //    }
             //    Console.WriteLine();
             //}

             //array-end
          

            //string
           /* var name = "Dipali";
            var surName = "Kuhad";

            var fullName = name + surName;
            var myFullName = string.Format("My Name is {0} {1}" ,name, surName);
            var namesGroup = new string[2] {"Dipali" , "Krishika"};
            var formatName = string.Join(", ",namesGroup);
            Console.WriteLine(fullName);
            Console.WriteLine(myFullName);
            Console.WriteLine(formatName);
            //string-end
            //enum
            var method = ShippingMethod.Sweta;
            Console.WriteLine((int)method);
            var methodId = 3;
            Console.WriteLine((ShippingMethod)methodId);
            Console.WriteLine(method.ToString());
            var methodName = "Sweta";
            var shipMeth = (ShippingMethod) Enum.Parse(typeof(ShippingMethod), methodName);
            //enum-end

            //value-type
            var v1 = 10;
            var v2 = v1;
            v2++;
            Console.WriteLine(string.Format("v1:{0},v2:{1} ", v1, v2));

            var arry1 = new int[3] {1, 2, 3};
            var arry2 = arry1;
            arry2[0] = 0;
            Console.WriteLine(string.Format(" arry1:{0}, arry2:{1} ", arry1[0], arry2[0]));

            //value-type-end
            //conditions-statement
            Console.WriteLine("conditions statements");
            //if-else statement
            if(20 > 18)
            {
                Console.WriteLine("20 is greater than 18");
            }
            int time = 20;
            if(time < 18)
            {
                Console.WriteLine("Good Day");
            }
            else
            {
                Console.WriteLine("Good Morning..");
            }
            int date = 22;
            if(date < 18) 
            {
                Console.WriteLine("Good Morning..");
            }
            else if(22 < 10)
            {
                Console.WriteLine("Good Day");

            }
            else
            {
                Console.WriteLine("Good Evening");
            }
            string results = (time < 18) ? "Good" : "Bad";
            Console.WriteLine(results);
            //if-else statement-end
            //switch-case
            int day = 3;
            switch (day)
            {
                case 1:
                    Console.WriteLine("sunday");
                    break;
                case 2:
                    Console.WriteLine("Monday");
                    break;
                case 3:
                    Console.WriteLine("Tuesday");
                    break;
                case 4:
                    Console.WriteLine("Wednesday");
                    break;
                default:
                    Console.WriteLine("Looking forward to the Weekend.");
                    break;

            }
            //switch-case-end

            //conditions-statement-end

            //iteration statements
            for (var i = 1;i <= 10; i++) 
            {
                if(i%2==0)
                {
                    Console.WriteLine(i);
                }
                
            }
            for (var i = 10; i >= 1; i--)
            {
                if (i%2 == 0)
                {
                    Console.WriteLine(i);
                }

            }
            var character = "Dipali";
            foreach (var nam in character){
                Console.WriteLine(nam);
            }
            var j = 0;
            while (j < 5) 
            {
                Console.WriteLine(j);
                j++;
            }
            var k = 0;
            do
            {
                Console.WriteLine(k);
                k++;
            }
            while (k < 5);

            //iteration statements-end
            //break
            for (int i = 1; i < 10; i++)
            {
                if (i == 5)
                {
                    break;
                }
                Console.WriteLine(i);
            }
            //break-end
            //continue
            for (int i = 1; i < 10; i++)
            {
                if (i == 5)
                {
                    continue;
                }
                Console.WriteLine(i);
            }
            //continue-end

            Console.ReadLine();

            //This is char# demo.
            *//*Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s*//*
            //int a = 15;
            //string b = Console.ReadLine();
            //Console.WriteLine(b);

            //Console.WriteLine("Hello World");
            //Console.Write("Hello c#");
            //Console.WriteLine("Hello Dipali: " + a);

            //datatypes
            //long myNum = -4686335769735;               // integer (whole number)
            //double myDoubleNum = 5.567;  // floating point number
            //char myLetter = 'D';         // character
            //bool myBool = false;          // boolean
            //string myText = "Dipali";     // string
            //Console.WriteLine(myNum);
            //Console.WriteLine(myDoubleNum);
            //Console.WriteLine(myLetter);
            //Console.WriteLine(myBool);
            //Console.WriteLine(myText);
            //datatypes end

            //type-casting
            //double x1 = (double)3.5;
            //Console.WriteLine(x1);
            //int x = 3;
            //double y = 4;
            //float z = 'y';
            //float varr = Convert.ToInt32(3.55);
            //Convert.ToDouble
            //Convert.ToBoolean
            //Console.WriteLine(x);
            //Console.WriteLine(y);
            //Console.WriteLine(z);

            //type-casting-end

            // user-input
            //console.writeline("enter your name:");
            //string name= console.readline();
            //console.writeline("hi  hello " + name);
            //Console.WriteLine("How many chocolate do you want?");
            //string want = Console.ReadLine();
            //Console.WriteLine("You will get chocolate : " + (Convert.ToInt32(want) + 6));
            // user-input-end

            //operators
            //int a = 4;
            //int b = 5;
            //a /= 3;
            //a++;
            //arithmatic
            //Console.WriteLine("The value of :" + (a + b));
            //Console.WriteLine("The value of :" + (a * b));
            //Console.WriteLine("The value of :" + (a - b));
            //Console.WriteLine("The value of :" + (a / b));
            //Console.WriteLine("The value of :" + (a % b));
            //Console.WriteLine("The value of :" + (a));
            //assign
            //Console.WriteLine("The value of :" + a);
            //logical
            //Console.WriteLine(true && true);
            //Console.WriteLine(a > 6 && a < 8);
            //Console.WriteLine(true && false);
            //Console.WriteLine(false && false);
            //Console.WriteLine(true || true);
            //Console.WriteLine(a > 6 || a < 8);
            //Console.WriteLine(true || false);
            //Console.WriteLine(false || false);
            //Console.WriteLine(!false);
            //Console.WriteLine(!true);

            //operators-end
            
*/
            //list
            var list = new List<int>() { 1, 2, 3, 4 };
            list.Add(1);
            list.AddRange(new int[3] { 5, 6, 7 });
            foreach (var l in list)
            {
                Console.WriteLine(l);
            }
            Console.WriteLine();
            Console.WriteLine("Index of 1:" + list.IndexOf(1));
            Console.WriteLine("Last Index of 1:" + list.LastIndexOf(1));


            Console.WriteLine("Count: " + list.Count);
            for (var l = 0; l < list.Count; l++)
            {
                if (list[l] == 1)
                {
                    list.Remove(list[l]);
                }
            }
            foreach (var l in list)
            {

                Console.WriteLine(l);
            }
            //list-end
            //date-time
            var dateTime = new DateTime(2023, 1, 2);
            var now = DateTime.Now;
            var today = DateTime.Today;

            //Console.WriteLine("Hour:" + now.Hour);
            //Console.WriteLine("Minutes:" + now.Minute);

            var tomorrow = now.AddDays(1);
            var yesterday = now.AddDays(-1);


            Console.WriteLine(now.ToLongDateString());
            Console.WriteLine(now.ToShortDateString());
            Console.WriteLine(now.ToLongTimeString());
            Console.WriteLine(now.ToShortTimeString());
            Console.WriteLine(now.ToString("yyyyy-MM-dd HH:mm"));
            //date-time-end
            //timespan

            var timeSpan = new TimeSpan(1, 2, 3);


            //var timeSpan1 = new TimeSpan(1, 0, 0);
            //var timeSpan2 = TimeSpan.FromHours(1);

            var start = DateTime.Now;
            var end = DateTime.Now.AddMinutes(2);
            var duration = end - start;
            Console.WriteLine("Duration:" + duration);

            //prperties
            Console.WriteLine("Minutes:" + timeSpan.Minutes);
            Console.WriteLine("Total Minutes:" + timeSpan.TotalMinutes);

            //add
            Console.WriteLine("Add Example: " + timeSpan.Add(TimeSpan.FromMinutes(8)));
            Console.WriteLine("Sub Example:" + timeSpan.Subtract(TimeSpan.FromMinutes(2)));

            //tostring
            Console.WriteLine("ToString" + timeSpan.ToString());

            //parse
            Console.WriteLine("Parse:" + TimeSpan.Parse("01:02:03"));
            //timespan-end

            //string
            var fuName = "Dipali Kuhad";
            //Console.WriteLine("Trim: '{0}'", fuName.Trim());
            //Console.WriteLine("ToUpper: '{0}'", fuName.Trim().ToUpper());
            //Console.WriteLine("ToLower: '{0}'", fuName.Trim().ToLower());

            //var index = fuName.IndexOf(' ');
            //Console.WriteLine(index);

            //var fName = fuName.Substring(0, index);
            //var lName = fuName.Substring(index + 1);
            //Console.WriteLine("First Name:" + fName);
            //Console.WriteLine("Last Name:" + lName);

            var split = fuName.Split('K');
            Console.WriteLine("First Name:" + split[0]);
            Console.WriteLine("Last Name:" + split[1]);

            Console.WriteLine(fuName.Replace("Dipali", "Krishika"));

            if(String.IsNullOrEmpty(null))
            {
                Console.WriteLine("Invalid");
            }
            //string convert to number
            var str = "56";
            var age = Convert.ToByte(str);
            Console.WriteLine(age);

            //number convert the string
            float price = 5.67f;
            Console.WriteLine(price.ToString("C"));
            //string-end
            

            //sumarizing-text

            //sumarizing-text-end

            //string-builder
            var builder = new StringBuilder("Hello Worlhgd");
       
            builder.Append('*', 10);
            builder.AppendLine();
            builder.Append("Header");
            builder.AppendLine();
            builder.Append('*', 10);
            builder.Replace('*', '+');
            builder.Remove(0, 10);
            builder.Insert(0, new string('*', 10));
            Console.WriteLine(builder);

            //string-builder-end
            //files

            File.Copy("C:\\Dipali-internship-2023\\week-1\\file1.txt", "Desktop\\D.txt");
               
            //files-end

            Console.ReadLine();








        }
    }
}
