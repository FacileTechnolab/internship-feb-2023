using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirst_Workflow
{
    //public partial class Course
    //{
    //    public int Id { get; set; }
    //    public string Title { get; set; }
    //    public string Description { get; set; }
    //    public CourseLevel Level { get; set; }
    //    public float FullPrice { get; set; }
    //    public Author Author { get; set; }
    //    public IList<Tag> Tg { get; set; }

        
    //}

    //public partial class Author
    //{
    //    public string Name { get; set; }
    //    public IList<Course> Cour { get; set; }
    //}

    //public partial class Tag
    //{
    //    public int Id { get; set; }
    //    public IList<Course> Cour { get; set; }
    //}

    public enum CourseLevel
    {
        Beginner = 1,
        Intermediate = 2,
        Advanced = 3
    }

    //public partial class PlutoContext : DbContext
    //{
    //    public DbSet<Course> Cour { get; set; }
    //    public DbSet<Author> Author { get; set; }
    //    public DbSet<Tag> Tg { get; set; }
    //    public DbSet<Category> Categories { get; set; }
    //    public PlutoContext()
    //        : base("name=CarConnection")
    //    {

    //    }
    //}
    internal class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
