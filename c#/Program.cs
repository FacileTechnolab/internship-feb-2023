using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace demo
{
    internal class Program
    {

        static void greet(string name)
        {
            Console.WriteLine("good morning " + name);
        }
        static float avg(int a,int b,int c)
        {
            float sum = a + b + c;
            return sum / 3;
        }
        static float avg(int a, int b)
        {
            
            return (a+b) / 2;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("hello world");
            /*datatype
            Interger int
           floting point = float
           character = char 'a' */

            /*int no = 500;
            Console.WriteLine($"i love this number  " + no);
            Console.Write("Good");
            Console.WriteLine("Good noon");
            string name = Console.ReadLine();
            Console.WriteLine($"My Name is  " + name);*/

            /*int a = 24;//int
            float b = 30.21F;//float 
            double c = 30.12;//double
            bool isgreate = true;//bool
            char d = 'r';//char
            string z = "my name is herry";//string


            Console.WriteLine(a);
            Console.WriteLine(b);
            Console.WriteLine(c);
            Console.WriteLine(isgreate);
            Console.WriteLine(d);
            Console.WriteLine(z);*/
            /*char n1 = 'z';
            int n2 = n1;
            Console.WriteLine(n2);
            int a1 = 98;
            float a2 = a1;
            Console.WriteLine(a2);
            float d1 = 98.89F;
            double d2 = d1;
            Console.WriteLine(d2); type casting
            int myInt = 9;
            double myDouble = myInt;  // Automatic casting: int to double

            Console.WriteLine(myInt);
            Console.WriteLine(myDouble);
            double myDouble = 9.78;
            int myInt = (int) myDouble;  // Automatic casting: int to double

            Console.WriteLine(myInt);
            Console.WriteLine(myDouble);
            double myDouble = 9.78;
            int myInt = (int)myDouble;  // Manual casting: double to int

            Console.WriteLine(myDouble);
            Console.WriteLine(myInt);
            int myInt = 9;
            double myDouble = myInt;       // Automatic casting: int to double

            Console.WriteLine(myInt);      // Outputs 9
            Console.WriteLine(myDouble);
            Type casting
            int my = 10;
            double d5 = 19.45;
            bool mybool = true;
            Console.WriteLine(Convert.ToString(my));
            Console.WriteLine(Convert.ToDouble(my));
            Console.WriteLine(Convert.ToString(mybool));
            Console.WriteLine(Convert.ToInt32(d5));
            string name = "   hello   " ;
            Console.WriteLine(name);
           string trimname1 = name.TrimStart();
            Console.WriteLine($"[{ (trimname1)}]");
            string trimname = name.TrimEnd();
            Console.WriteLine($"[{ (trimname)}]");
            Console.WriteLine("enter your name");
            string name = Console.ReadLine();
            Console.WriteLine($"Welcome" + name);
            Console.WriteLine("how many chocalate you want");
            string num = Console.ReadLine();
            Console.WriteLine($"your chocalte"  + (Convert.ToInt32(num) + 5));
            Arithmetic operator
            int a = 12;
            int b = 4;
           //Console.WriteLine($"value of a + b is :" + (a + b));
            //Console.WriteLine($"value of a - b is :" + (a - b));
            //Console.WriteLine($"value of a * b is :" + (a * b));
            //Console.WriteLine($"value of a / b is :" + (a / b));
            assignment operator
            int c = 12;
             int d = c;
            //d += 2;
            //d -= 2;
            //d *= 2;
            d /= 2;
            Console.WriteLine(d);
            Logical operator
            Console.WriteLine(true & false);
            Console.WriteLine(true & true);
            Console.WriteLine(false & false);
            Console.WriteLine(true || false);
            Console.WriteLine(true || true);
            Console.WriteLine(false || false);
            Console.WriteLine(!false);
            Console.WriteLine(!true);
          comparision operator
            Console.WriteLine(56 > 10);
            Console.WriteLine(56 < 10);
            Console.WriteLine(56 >= 10);
            Console.WriteLine(56 <=10);
            Console.WriteLine(56 != 10);
            Math operation
            int a = Math.Max(96, 965);
            Console.WriteLine(a);
            int b = Math.Min(96, 965);
            Console.WriteLine(b);
            double c = Math.Sqrt(16);
            Console.WriteLine(c);
            double d = Math.Abs(-4.7);
            Console.WriteLine(d);//abs use for negative to positive value
           double e = Math.Round(9.99);
            Console.WriteLine(e);
            ***String operation***
            String hi = "hello, My name is Jack";
            Console.WriteLine(hi);
            Console.WriteLine(hi.Length);
            Console.WriteLine(hi.ToUpper());
            Console.WriteLine(hi.ToLower());
            Console.WriteLine("good morning " + hi);
            string name = Console.ReadLine();
            string candy = Console.ReadLine();
            Console.WriteLine($"your name is {name} and your {candy} candies");
            String hi = "hello, My name is Jack";
            Console.WriteLine(hi[3]);
            Console.WriteLine(hi.IndexOf("name"));
            Console.WriteLine(hi.Substring(10));
            String hello = "my name is \"jack\" and i love playing cricket";
            Console.WriteLine(hello);
            **condition*
            Console.WriteLine("Enter your age");
            string agest = Console.ReadLine();
            int age = Convert.ToInt32(agest);
            bool isbanned = true;
          
            if(age<2 || isbanned)
            {
                Console.WriteLine("you are just born & you are banned");
            }
            else if (age < 12 || isbanned) 
            {
                Console.WriteLine("you can finish your school  & you are banned");
            }
            else if (age < 78 || isbanned)
            {
                Console.WriteLine("you can Drive && you are not banned");
            }
            else
            {
                Console.WriteLine("you cannot Drive");
            }
            Switch
            int age = 10;
            switch(age)
            {
                case 18:
                    Console.WriteLine("plz wait for an year");
                    break;
                case 20:
                    Console.WriteLine("you are 20");
                    break;
                default:
                    Console.WriteLine("enjoy");
                        break;
                loop while
            int i = 0;
            while (i < 5)
            {
                Console.WriteLine(i+1);
                i++;
            }
            Console.ReadLine();
            do_while
            int i = 0;
            do 
            {
                Console.WriteLine(i);
                i++;
            } while (i > 5) ;
            for(int i = 0; i < 5; i++)
            {
                if (i == 0) { continue; }
                
                Console.WriteLine(i+1);
                //break;
            } method
            greet("ram");
            Console.WriteLine(avg(10, 10, 10));
            Console.WriteLine(avg(20, 10));
            Console.ReadLine();*/
            person p = new person();
            p.Fname = "virat";
            p.lname = "kohli";
            p.intro();
            //Class1 tommy = new Class1();
           
            //Console.WriteLine(tommy.gethealth());
            //tommy.sethealth(60);
            //Console.WriteLine(tommy.gethealth());
            Console.ReadLine();

        }







    }
    }

