using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;

namespace EntityFramework_1
{



   public class Student
    {
        public int id { get; set; }

        public string name { get; set; }
        public DateTime Birthdate { get; set; }
        public string Address { get; set; }
       
    }
    public class BlogDbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            var context = new MigrationEntities1();
            var person = new Person()
            {
                Body = "Body",
                DatePublished = DateTime.Now,
                Title = "C++",
                Postid=8
            };

            context.People.Add(person);
            context.SaveChanges();
                }
    }
}
