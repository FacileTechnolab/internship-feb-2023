using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbFirst
{
    public class Cource
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public CourseLevel Level { get; set; }
        public float FullPrice { get; set; }
        public Author Author { get; set; }
        public IList<Tag> Tags { get; set; }
    }
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Course> Courses { get; set; }
    }
    public enum CourseLevel
    {
        Beginner=1,
        Intermediate=2,
        Advanced=3
    }
    public class PlutoContext : PlutoDbContext
    {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet <Tag> Tags { get; set; }

        public PlutoContext()
          :base("name=DefaultConnection")
        { 
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            //var dbContext = new PlutoDbContext();
            //dbContext.GetAuthorCourses()
            //var courses =dbContext.GetCourses();
            //foreach(var c in courses)
            //{
            //    Console.WriteLine(c.Title );
            //}
            var course= new Course();
            course.Level = CourseLevel.Beginner;
        }
    }
}
