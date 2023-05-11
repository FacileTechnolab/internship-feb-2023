using OpenTracing.Tag;
using System;
using System.Linq;
using System.Data.Entity;
namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {

            //var context = new PlutoContext();
            //var course = new Course
            //{
            //    Name = "Test",
            //    Description="dipali",
            //    FullPrice=19.87f,
            //    Level = 1,
            //    Author= new Author { Id=1,Name= "Mosh Hamedani" }
            //};
            //context.Courses.Add(course);
            //context.SaveChanges();


            //var context = new PlutoContext();
            //var authors=context.Authors.ToList();

            //var author= context.Authors.Single(a=>a.Id==1);
            //var course = new Course
            //{
            //    Name = "Test 2",
            //    Description = "dipali",
            //    FullPrice = 19.87f,
            //    Level = 1,
            //    Author = author
            //};
            //context.Courses.Add(course);
            //context.SaveChanges();


            //foreign key approch 
            //var context = new PlutoContext();

            //var course = new Course
            //{
            //    Name = "Test 2",
            //    Description = "dipali",
            //    FullPrice = 19.87f,
            //    Level = 1,
            //    AuthorId=1
            //};
            //context.Courses.Add(course);
            //context.SaveChanges();



            //update objects
            //var context = new PlutoContext();


            //var course = context.Authors.Find(6);

            //course.Name = "Shivangi ";
            //course.Id = 6;
            //context.SaveChanges();


            //removing objects  cascade delete

            //var context = new PlutoContext();


            //var course = context.Courses.Find(10);

            //context.Courses.Remove(course);
            //context.SaveChanges();

            //without cascade delete
            //var context = new PlutoContext();


            //var course = context.Authors.Include(a=>a.Courses).Single(a=>a.Id==6);
            //context.Courses.RemoveRange(course.Courses);

            //context.Authors.Remove(course);
            //context.SaveChanges();

            //Console.ReadLine();


            //working with change tracker

            var context = new PlutoContext();
            //Add in object 
            context.Authors.Add(new Author { Name = "Krishika" });

            //Update in object
            var author =context.Authors.Find(4);
            author.Name = "Update";

            //Remove in object 
            var another = context.Authors.Find(5);
            context.Authors.Remove(another);
            //    context.ChangeTracker.Entries<Author>();

            var entries=context.ChangeTracker.Entries();

            foreach (var entry in entries)
            {
                entry.Reload();
                Console.WriteLine(entry.State);
            }
        }
    }
}
