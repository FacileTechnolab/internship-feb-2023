
using System;
using System.Linq;
using System.Collections.Generic;
using System.Data.Entity;
using System.Runtime.ConstrainedExecution;
using System.Threading;

namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new PlutoContext();
            //IEnumerable<Course> courses = context.Course;
            //var filtered = courses.Where(c => c.Level == 1);    
            //foreach (var course in filtered)
            //{
            //    Console.WriteLine(course.Name);
            //}

            //IEnumerable<Course> x;
            //x.Where(c => c.Level == 1).OrderBy(c => c.Name);





            //var course = context.Course.Where(c => c.IsBeginnerCourse == true);
            // foreach(var c in course)
            //{
            //    Console.WriteLine(c. Name);
            //} 

            //************************************************************************

            //var courses = context.Course.Skip(10).Take(10);

            //context.Course.OrderBy(c => c.Level).FirstOrDefault(c => c.FullPrice > 100);
            //context.Course.SingleOrDefault(c => c.Id == 1);

            //var allAbove10Dollars = context.Course.All(c => c.FullPrice > 10);
            //context.Course.Any(c => c.Level == 1);

            //var count = context.Course.Where(c => c.Level == 1).Count();
            //context.Course.Max(c => c.FullPrice);
            //context.Course.Min(c => c.FullPrice);
            //context.Course.Average(c => c.FullPrice);


            //************************************************************************

            // var courses = context.Course;

            /*Linq
            var query =
                from c in context.Course
                where c.Name.Contains("c#")
                orderby c.Name
                select c;
            foreach (var course in query)
                Console.WriteLine(course.Name);*/

            /*extention method
            var courses= context.Course
                .Where(c => c.Name.Contains("c#"))
                .OrderBy(c => c.Name);

            foreach (var course in courses) 
                Console.WriteLine(course.Name);*/
            //************************************************************************

            //****Inner join****
            //   var query =
            //   from c in context.Course
            //   join a in context.Authors on c.AuthorId equals a.Id
            //   select new { CourseName = c.Name, AuthorName = a.Name };


            //****Group Join****
            //var query =
            //from a in context.Authors
            //join c in context.Course on a.Id equals c.AuthorId into g
            //select new { AuthorName = a.Name, Courses = g.Count() };
            //foreach (var x in query)
            //{
            //    Console.WriteLine("{0} ({1})", x.AuthorName, x.Courses);
            //}


            //****Cross Join****
            //var query =
            //from a in context.Authors
            //from c in context.Course
            //select new { AuthorName = a.Name, CourseName = c.Name };
            //foreach (var x in query)
            //{
            //    Console.WriteLine("{0} ({1})", x.AuthorName, x.CourseName);
            //}
            //************************************************************************

            //foreach (var group in query)
            //{
            //    Console.WriteLine("{0} ({1})", group.Key, group.Count());
            //    foreach (var courses in group)
            //    Console.WriteLine("\t{0}", courses.Name);

            //}
            //multiple conditions
            //where c.Level == 1 && c.Author.Id == 1

            //orderby
            //where c.Author.Id == 1
            //orderby c.Level descending, c.Name
            //select c;
            //************************************************************************


            // Iquerable or set Operator
            //var tags = context.Course
            //    .Where(c => c.Level == 1)
            //    .OrderByDescending(c => c.Name)
            //    .ThenByDescending(c => c.Level)
            //    .SelectMany(c => c.Tags)
            //    .Distinct();
            //foreach (var t in tags)
            //{
            //    Console.WriteLine(t.Name);
            //}

            // Grouping

            //joins

            // context.Course.Join(context.Authors,
            //    c => c.AuthorId,
            //    a => a.Id,
            //    (Course, author) => new
            //    {
            //        CourseName = Course.Name,
            //        AuthorName = author.Name
            //    });

            //context.Authors.GroupJoin(context.Course,
            //    a => a.Id,
            //    c => c.AuthorId, (author, courses) => new
            //    {
            //        Author = author,
            //        Course= courses.Count()

            //    })

            //context.Authors.SelectMany(a => context.Course,
            //    (author, Course) => new
            //    {
            //        AuthorName = author.Name,
            //        CourseName = Course.Name
            //    });
            //************************************************************************



            //var course = context.Course.Single(c => c.Id == 2);
            //foreach( var tag in course.Tags)
            //{
            //    Console.WriteLine(tag.Name);
            //}

            //var courses = context.Course.Include(x => x.Instructor).ToList();
            //foreach (var course in courses) 
            //{
            //    Console.WriteLine("{0} by {1}", course.Name, course.Instructor.Name);
            //}

            var author = context.Authors.Single(a => a.Id == 1);

            context.Entry(author).Collection(a => a.Courses).Load();

            context.Course.Where(c => c.AuthorId == author.Id).Load();


            var authors =  context.Authors.ToList();
            var authorIds = authors.Select(a => a.Id);

            context.Course.Where(c => authorIds.Contains(c.AuthorId) && c.FullPrice == 0). Load();
          







                Console.ReadLine();
            

                
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            





          
             
        }
    }
}
