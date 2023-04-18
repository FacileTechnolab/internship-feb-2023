// See https://aka.ms/new-console-template for more information
using System.IO;
using System;
using System.ComponentModel;
using System.Text;

namespace Date
{
    class Dateandtime
    {
        static void Main(string[] args)
        {
            /*var dateTime = new DateTime(2023, 2, 23);
            var now = DateTime.Now;
            var today = DateTime.Today;

            Console.WriteLine("hour :" + now.Hour);
            Console.WriteLine("minutes: " + now.Minute);
            Console.WriteLine("day :" + now.Day);
            Console.WriteLine("months :" + now.Month);
            Console.WriteLine("year :" + now.Year);
            var tomorrow = now.AddDays(1);
            var yesterday = now.AddDays(-1);

            Console.WriteLine(now.ToLongDateString());
            Console.WriteLine(now.ToShortDateString());
            Console.WriteLine(now.ToLongTimeString());
            Console.WriteLine(now.ToShortTimeString());
            Console.WriteLine(now.ToString("yyyy-MM-dd HH:mm"));


            var timespan = new TimeSpan(1, 2, 3);
            var timespan1 = new TimeSpan(1, 0, 0);

            var timespan2 = TimeSpan.FromHours(1);

            var start = DateTime.Now;
            var end = DateTime.Now.AddMinutes(2);
            var duration = end - start;
            Console.WriteLine("duration " + duration);

            //properties 
            Console.WriteLine("minutes : " + timespan.Minutes);
            Console.WriteLine("total minutes : " + timespan.TotalMinutes);

            //add
            Console.WriteLine("add Example :" + timespan.Add(TimeSpan.FromMinutes(8)));
            Console.WriteLine("Subtract example: " + timespan.Subtract(TimeSpan.FromMinutes(8)));

            //string
            Console.WriteLine("to staring :" + timespan.ToString());

            // parse

            Console.WriteLine("parse : " + TimeSpan.Parse("01:02:03"));*/


            // working with string 

            /* var fullname = "shivangi shah";
            *//* Console.WriteLine("trim is :'{0}'", fullname.Trim());
             Console.WriteLine("to uppercase '{0}' :", fullname.Trim().ToUpper());
             Console.WriteLine("to lowercase '{0}':", fullname.Trim().ToLower());
 */

            /*var index= fullname.IndexOf(' ');
            var firstname= fullname.Substring(6,8);
            var lastname= fullname.Substring(7 + 1);
            Console.WriteLine(index);
            Console.WriteLine("first name is : " + firstname);
            Console.WriteLine("last name is : " + lastname);
*//*
            string[] names= fullname.Split(' ');
            Console.WriteLine("first name :" + names[0]);
            Console.WriteLine("last name:" + names[1]);
            Console.WriteLine(fullname.Replace("shah", "jitendrabhai"));

           *//* if (String.IsNullOrWhiteSpace(" ") )
                Console.WriteLine("valid");
*//*
            var str = "23";
            var age = Convert.ToByte(str);
            Console.WriteLine(age);

            var price = 56.6f;
            Console.WriteLine(price.ToString("C"));


            var now = DateTime.Now;
            var currentDate= DateTime.Now;
            currentDate=currentDate.AddDays(1);
            Console.WriteLine(currentDate);

            var bulder=new StringBuilder("hello world");
            bulder.Append('-', 10);
            bulder.AppendLine();
            bulder.Append("header");
            bulder.AppendLine();
            bulder.Append('-',10);
            
            bulder.Replace('-', '+');

            bulder.Remove(0,10);
            bulder.Insert(0,new string('-',10));
            bulder.Clear();
            Console.WriteLine(bulder);

            Console.WriteLine("what is your name ?..");
            var name=Console.ReadLine();

            var array = new char[name.Length];
            for(var i = name.Length;i>0;i--)
                array[name.Length - i] = name[i - 1];

            var reverse= new string(array);
            Console.WriteLine(reverse);*/

            /*var path = @"c:\Demo path";

            File.Copy(@"C:\temp\Demo path", @"D:\temp\Demo path", true);

            Console.WriteLine(File.Copy);
*/
            string writeText = "Hello World!";
            File.WriteAllText("filename.txt", writeText);
            string readText = File.ReadAllText("filename.txt");
            Console.WriteLine(readText);
            File.Copy("filename.txt", "filen.txt");
            string ext = File.ReadAllText("filen.txt");
            Console.WriteLine(ext);
            File.Delete("filen.txt");
            string xt = File.ReadAllText("filen.txt");
            Console.WriteLine(xt);

        }
    }
}
