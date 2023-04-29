using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{

    //Define the generic class
    public class Student<T>
    {
        //define a variable of type T
        public T data;
        public Student(T data)
        {
            this.data = data;
            Console.WriteLine("Data Passed: " + this.data);
        }

    }


    // generic method  example
    public class Person<T>
    {
        public void Information(T data)
        {
            Console.WriteLine("data is : "+ data);

        }
    }

    public  class GenericClass
    {
        public void Details()
        {

            Person<int> person = new Person<int>();
            person.Information(1);



            //create an instance with data type string 
            Student<string> studentName = new Student<string>("Shivangi");

            // create an instance with data type int
            Student<int> studentId = new Student<int>(22);
        }
        
    }
}
