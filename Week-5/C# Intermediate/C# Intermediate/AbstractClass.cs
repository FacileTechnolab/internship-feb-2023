using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__Intermediate
{
    abstract class Abstractclass
    {
        public string FirstName;
        public string LastName;
        public int Age;
        public string PhoneNumber;

        public abstract void PrintDetails();
       
    }
    class Student : Abstractclass
    {
        public int RollNo;
        public int Fees;

        public override void PrintDetails()
        {
            string name = this.FirstName + " " + this.LastName;
            Console.WriteLine("Student Name is :"+ name);
            Console.WriteLine("Student Age is :" +  this.Age);
            Console.WriteLine("Student RollNo is:" + this.RollNo);
            Console.WriteLine("Student Fees is:" + this.Fees);
        }   
    }
    class Teacher : Abstractclass 
    {
        public string Qulification;
        public int Salary;

        public override void PrintDetails()
        {
            string name = this.FirstName + " " + this.LastName;
            Console.WriteLine("Teacher Name is :"+ name);
            Console.WriteLine("Teacher Age is :" + this.Age);
            Console.WriteLine("Teacher Qulification is :" + this.Qulification);
            Console.WriteLine("Teacher Salary is :" + this.Salary);
        }
    }
}
