using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Code_First
{
    //public partial class Course
    //{
        
    //    public int Id { get; set; }
    //    public string Title{ get; set; }
    //    public string Description { get; set; }
    //    public CourseLevel Level { get; set; }
    //    public float FullPrice { get; set; }

    //    public Author Author { get; set; }
    //    public IList<Tag> Tags { get; set; }



    //}
    public partial class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Course> Courses { get; set; }

    }
    //public partial class Tag
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //    public IList<Course> Courses { get; set; }

    //}
    public enum CourseLevel
    {
        Beginner=1,
        Intermediate=2,
        Advance=3
    }
    public class plutoContext:DbContext
    {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Tag> Tags { get;set; }
        public plutoContext()
            :base("name=DefaultConnection")
        {
            
        }
    }
    public  class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
