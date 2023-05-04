using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EDMX_Designer
{

    public enum Level:byte
    {
        Beginner=1,
        intermediate=2,
        Advance=3
    }
     class Program
    {
        static void Main(string[] args)
        {


            //var course = new Cours();
            //course.Level = Level.Beginner;

            var dbContext = new skilaEntities2();

            var courses = dbContext.GetCourses();

            foreach (var a in courses)
            {
                Console.WriteLine(a.CourseID);
                Console.ReadLine();
            }
        }
    }
}
