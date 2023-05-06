using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfEdmxDesigner
{

    public class Course1
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public CourseLevel Level { get; set; }
        public float FullPrice { get; set; }
        public Author Author { get; set; }
        public IList<Tag> Tags { get; set; }
    }

    public class Author1
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Course> Courses { get; set; }
    }

    public class Tag2
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Course> Courses { get; set; }
    }

    public enum CourseLevel
    {
        Beginner = 1,
        Intermediate = 2,
        Advanced = 3
    }

    public class PlutoContext : DbContext
    {
        public DbSet<Course1> Courses1 { get; set; }
        public DbSet<Author1> Authors1 { get; set; }
        public DbSet<Tag2> Tags2 { get; set; }

        public PlutoContext()
            : base("name=DefaultConnection")
        {

        }
        public enum Level : byte
        {
            Beginner = 1,
            Intermediate = 2,
            Advanced = 3,
        }


        class Program
        {
            static void Main(string[] args)
            {
                //var dbContext = new PlutoDbContext();

                //dbContext.GetAuthorCourses(9);
                //var courses = dbContext.GetCourses();
                //foreach ( var c in courses ) 
                //{
                //    Console.WriteLine(c.Title);
                //    Console.ReadLine();
                //}

                var course = new Course();
                course.Level = CourseLevel.Beginner;
            }
        }
    }

}

