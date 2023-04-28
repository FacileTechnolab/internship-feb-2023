using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_IntermediateClass
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        
    }      




    internal class ObjectIntialize
    {
        public void Method()
        {
            Student obj3 = new Student()
            {
                Id = 1,
                Name = "Shivangi Shah",
                Address = "Ahmedabad"
            };



            Student obj1 = new Student()
            {
                Id = 2,
                Name = "dipali",
                Address = "Ahmedabad"
            };


            Student obj2 = new Student()
            {
                Id = 3,
                Name = "Krishika",
                Address = "Ahmedabad"
            };
             List<Student>obj = new List<Student>()
            {
                obj3,
                obj1,
                obj2
            };
            foreach (var d in obj)
            {
                Console.WriteLine(d.Id + " " + d.Name +" "+d.Address);
            }


            //Console.WriteLine(obj);
            //Console.WriteLine(obj.Name);
            // Console.WriteLine(obj.Address);
            Console.ReadLine();

        }
    }
}
