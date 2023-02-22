using System;

namespace Hello
{
    public class Person
    {
        public string FirstName;
        public string LastName;
        
        public void Introduction() 
        { 
            Console.WriteLine("My Name is : " + FirstName+ " " + LastName);
        }
        
    }
    class Program
    {
        public static void Main(string[] args)
        {
        var nm = new Person();
        nm.FirstName = "Dipali";
        nm.LastName = "Kuhad";
        nm.Introduction();
        Console.ReadLine();

            //This is char# demo.
            /*Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s*/
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
            //string-function

            //string-function-end











        }
    }
}
