using System;
using System.Data.Entity;
using System.Linq;
namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new PlutoContext();
            //linq syntax
            //var query = 
            //    from c in context.Courses
            //    where c.Name.Contains("c#")
            //    orderby c.Name
            //    select c;

            //foreach (var course in query)
            //{
            //    Console.WriteLine(course.Name);
            //}

            //extension methods
            //var courses = context.Courses
            //    .Where(c => c.Name.Contains("C#"))
            //    .OrderBy(c => c.Name);

            //foreach (var course in courses)
            //{   
            //    Console.WriteLine(course.Name);
            //}


            //var query = 
            //    from c in context.Courses
            //    where c.Author.Id == 1 
            //    orderby c.Level descending , c.Name
            //    select new {Name = c.Name, Author = c.Author.Name};

            //var query =
            //    from c in context.Courses
            //    group c by c.Level
            //    into g
            //    select g;
            //foreach (var group in query)
            //{
            //    Console.WriteLine(group.Key);

            //    foreach(var course in group)
            //    {
            //        Console.WriteLine("{0} ({1})", group.Key, group.Count());
            //    }
            //}


            //var query =
            //    from c in context.Courses
            //    join a in context.Authors on c.AuthorId equals a.Id
            //    select new {CourseName = c.Name, AuthorName = a.Name};

            //var query =
            //   from c in context.Authors
            //   join a in context.Courses on c.Id equals a.AuthorId into g
            //   select new { AuthorName = c.Name, Courses = g.Count() };

            //foreach ( var c in query )
            //{ 
            //    Console.WriteLine("{0} - ({1})", c.AuthorName, c.Courses);
            //}

            //var query =
            //   from a in context.Authors
            //   from c in context.Courses
            //   select new { Authorname = a.Name, CourseName = c.Name};

            //foreach (var c in query)
            //{
            //    Console.WriteLine("{0} - ({1})", c.Authorname, c.CourseName);
            //}

            //var tags = context.Courses
            //    .Where(c => c.Level == 1)
            //    .OrderByDescending(c => c.Name)
            //    .ThenByDescending(c => c.Level)
            //    .SelectMany(c => c.Tags)
            //    .Distinct();

            //foreach (var t in tags )
            //{

            //        Console.WriteLine(t.Name);

            //}

            //linq extension method groupby
            //var groups = context.Courses.GroupBy(x => x.Level);

            //foreach(var group in groups)
            //{
            //    Console.WriteLine("KEY:" + group.Key);

            //    foreach(var course in group)
            //    {
            //        Console.WriteLine("\t" +course.Name);
            //    }
            //}

            //linq extension method join
            //context.Courses.Join(context.Authors, c => c.AuthorId, a => a.Id, (course, author) => new
            //{
            //    CourseName = course.Name,
            //    AuthorName = author.Name
            //});

            //linq extension method Groupjoin
            //context.Authors.GroupJoin(context.Courses, a => a.Id, c => c.AuthorId, (author, course) => new
            //{
            //    Author = author,
            //    Courses = course.Count()
            //});

            //linq extension method Crossjoin
           // context.Authors.SelectMany(a => context.Courses, (author, course) => new 
           //    {
           //    AuthorName = author.Name,
           //    CourseName = course.Name
           //});

            //var courses = context.Courses.Skip(10).Take(10);

            //elememt operators
            //context.Courses.OrderBy(c => c.Level).FirstOrDefault(c => c.FullPrice > 100);
            //context.Courses.SingleOrDefault(c => c.Id == 1)

            //QUANTIFYING
            //var count = context.Courses.Where(c => c.Level == 1).Count();
            //context.Courses.Max(c => c.FullPrice);
            //context.Courses.Min(c => c.FullPrice);
            //context.Courses.Average(c => c.FullPrice);


        }
    }
}
