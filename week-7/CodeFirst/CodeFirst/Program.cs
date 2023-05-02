using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirst
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
        }
    }
}
