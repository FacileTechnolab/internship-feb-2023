using System;

namespace AccModifidemoC_Inter
{
    partial class Program
    {
        public class Student
        {
            public int Id;
            public string Name;

            public Student(int i, string n) 
            {
                Id = i;
                Name = n;
                
            }

            public int getId() 
            { 
                return Id; 
            }
            public string getName() 
            { 
                return Name;
            }

        }
    }
}
