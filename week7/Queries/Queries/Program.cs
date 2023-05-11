using System;
using System.Linq;
namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {

            var context = new PlutoContext();
            IQueryable<Course> courses = context.Courses;
            var filtered = courses.Where(c => c.Level == 1);
                foreach(var course in filtered) 
                  Console.WriteLine(course.Name);
            //var courses=context.Courses;
            //var filtered = courses.Where(c => c.Level == 1).OrderBy(c=>c.Name);
            //var sorted=filtered.OrderBy(c => c.Name );


            //var courses = context.Courses.ToList().Where(c=>c.IsBeginnerCourse==true);

            //foreach (var c in courses)
            //{
            //    Console.WriteLine(c.Name); 
            //}


            //var courses = context.Courses
            //    .Where(c => c.Level == 1)
            //    .OrderByDescending(c => c.Name)
            //    .ThenByDescending(c => c.Level)
            //    .Select(c => c.Tags);
            //foreach(var c in courses)
            //{
            //    foreach (var tag in c)
            //        Console.WriteLine(tag.Name);
            //    Console.ReadLine();
            //}


            //var tags = context.Courses
            //   .Where(c => c.Level == 1)
            //   .OrderByDescending(c => c.Name)
            //   .ThenByDescending(c => c.Level)
            //   .SelectMany(c => c.Tags);

            //foreach (var t in tags)
            //    Console.WriteLine(t.Name);
            //Console.ReadLine();


            //SetOperators

            //var tags = context.Courses
            //   .Where(c => c.Level == 1)
            //   .OrderByDescending(c => c.Name)
            //   .ThenByDescending(c => c.Level)
            //   .SelectMany(c => c.Tags)
            //.Distinct();

            //foreach (var t in tags)
            //    Console.WriteLine(t.Name);
            //Console.ReadLine();


            //Grouping
            //var groups = context.Courses.GroupBy(c => c.Level);
            //    foreach(var group in groups)
            //{
            //    Console.WriteLine("Key:"+group.Key);
            //    foreach (var course in group)
            //        Console.WriteLine("\t" + course.Name);
            //}

            //joining
            //context.Courses.Join(context.Authors, c => c.AuthorId, a => a.Id, (course, author) => new
            //{
            //    CourseName = course.Name,
            //    AuthorName = author.Name,
            //});

            //GroupJoin
            //context.Authors.GroupJoin(context.Courses, a => a.Id, c => c.AuthorId, (author, courses) => new
            //{
            //    Author = author,
            //    Courses = courses.Count()
            //});

            //crossjoin
            //context.Authors.SelectMany(a => context.Courses, (author, course) => new
            //{
            //    AuthorName = author.Name,
            //    CourseName = course.Name
            //});

            //partitioning
            //var courses = context.Courses.Skip(10).Take(10);

            //ElementOperators
            context.Courses.OrderBy(c => c.Level).FirstOrDefault(c => c.FullPrice > 100);
            context.Courses.SingleOrDefault(c => c.Id == 1);

                //Quantifying
                var  allAbove10Dollars=context.Courses.All(c=>c.FullPrice > 100);
            context.Courses.Any(c => c.Level == 1);

            //Aggregatiog
            context.Courses.Max(c=> c.FullPrice);
            context.Courses.Min(c=> c.FullPrice);
            context.Courses.Average(c=> c.FullPrice);

        }
    } 
}
