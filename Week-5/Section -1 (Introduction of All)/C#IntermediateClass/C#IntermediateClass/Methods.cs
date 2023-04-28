using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_IntermediateClass
{
    public class Point
    {
        public int X;
        public int Y;
        public Point(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }
        public void Move(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }
        public void Move(Point newLocation)
        {
            //this.X = newLocation.X;
            //this.Y = newLocation.Y;
            if (newLocation == null)
                Move(newLocation.X, newLocation.Y);
            
        }

        //public void Move(Point newLocation)
        //{

        //    if (newLocation == null)
        //        throw new ArgumentNullException("new Location");

        //   Move(newLocation.X, newLocation.Y);
        //}
    }


    public class Calculator
    {
        public int Add(params int[] numbers)
        {
            var sum = 0;
            foreach (var i in numbers)
            {
                sum += i;
            }
               return sum;
        }
    }
    internal class Methods
    {
        public void MethodsDetails()
        {
            //var numbers = int.Parse("abc");

            try 
            {
                var num = int.Parse("abc");
            }
            catch (Exception )
            {
                Console.WriteLine("Conversion are failed.");
            }

            int number;
            var result= int.TryParse("abc",out number);
            if (result)
                Console.WriteLine(number);

            else
                Console.WriteLine("Conversion failed.");

            Console.ReadLine();
        }
        static void Params()
        {
            var calculator = new Calculator();
            Console.WriteLine(calculator.Add(1, 2));

            Console.WriteLine(calculator.Add(1, 2, 3));

            Console.WriteLine(calculator.Add(1, 2, 3, 4));

            Console.WriteLine(calculator.Add(1, 2, 3, 4, 5));

            Console.WriteLine(calculator.Add(new int[] { 1, 2, 3, 4, 5 }));
            Console.ReadLine();
        }

            //    static void  UsePoint()
            //    {
            //try
            //{

            //    Point point = new Point(12, 22);
            //    point.Move(null);
            //    Console.WriteLine("Point is at ({0} ,{1})", point.X, point.Y);


            //    point.Move(new Point(100, 125));
            //    Console.WriteLine("Point is at ({0} ,{1})", point.X, point.Y);
            //}
            //catch (Exception)
            //{
            //    Console.WriteLine("like un expected error occured.");

            //}
            //Console.ReadLine();
            //}




            //var point = new Point(12, 22);

            //point.Move(null);
            //Console.WriteLine("point is at ({0} ,{1})", point.X, point.Y);



            //point.Move(100, 125);
            //Console.WriteLine("point is at ({0} ,{1})", point.X, point.Y);
            //Console.ReadLine();
           
        
    }
}
