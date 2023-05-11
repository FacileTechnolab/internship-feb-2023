
using System;
using System.Linq;
using System.Collections.Generic;
using System.Data.Entity;
using System.Runtime.ConstrainedExecution;
using System.Threading;
using System.Runtime.Remoting.Activation;
using System.Xml.Linq;
using System.Runtime.Remoting.Contexts;

namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {
           var context = new PlutoContext();

            //var author = new Author() { Id = 1, Name = "Mosh Hamedani" };
            //context.Authors.Attach(author);
            //var courses = new Course
            //{
            //    Name = "New Course 2",
            //    Description = "New Description",
            //    FullPrice = 19.95f,
            //    Level = 1,
            //    AuthorId = 1
            //};
            //context.Course.Add(courses);


            //var authors = context.Authors.ToList();
            //var author = context.Authors.Single(a => a.Id == 1);

            //var course = context.Course.Find(3);
            //course.Name = "New Name";
            //course.AuthorId = 2;
            //Console.ReadLine();


            //var course = context.Course.Find(6);
            //context.Course.Remove(course);


            //var author = context.Authors.Include(a => a.Courses).Single(a => a.Id == 2);
            //context.Course.RemoveRange(author.Courses); 
            //context.Authors.Remove(author);

            //Add an object
            context.Authors.Add(new Author { Name = "New Author" });

            //Update An Object
            var author = context.Authors.Find(3);
            author.Name = "Update";

            //Remove an object
            var another = context.Authors.Find(4);
            context.Authors.Remove(another);
           
            var entries = context.ChangeTracker.Entries();
            foreach (var entry in entries) 
            {
                entry.Reload();
                Console.WriteLine(entry.State);
            }
        }
    }
}
