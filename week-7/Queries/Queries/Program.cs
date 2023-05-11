using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
namespace Queries
{
    class Program
    {
        static void Main(string[] args)
        {
            //var author = new Author() { Id = 1, Name = "Mosh Hamedani" };
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


            //deferred education
            //var course = context.Courses.ToList().Where(c => c.IsBeginnerCourse == true);

            //foreach (var c in course)
            //{ 
            //    Console.WriteLine(c.Name);
            //}


            //Iqueryable
            //IQueryable<Course> courses = context.Courses;
            //var filtered = courses.Where(c => c.Level == 1);

            //foreach(var c in filtered)
            //{
            //    Console.WriteLine(c.Name);
            //}


            //IEnumerable
            //IEnumerable<Course> courses = context.Courses;
            //var filtered = courses.Where(c => c.Level == 1);

            //foreach (var c in filtered)
            //{
            //    Console.WriteLine(c.Name);

            //}
            //Console.ReadLine();




            //loading realeted object
            //lazy loading
            //var course = context.Courses.Single(c => c.Id == 2);

            //    foreach(var tag in course.Tags)
            //    {
            //       Console.WriteLine(tag.Name);
            //    }

            //N + 1 problem
            //var courses = context.Courses.Include(x => x.Author).ToList();

            //foreach (var c in courses)
            //{
            //   // var aa = context.Authors.Where(x => x.Id == c.AuthorId).FirstOrDefault();
            //    Console.WriteLine("{0} by {1}", c.Name, c.Author.Name);
            //}

            //eager loading
            //var courses = context.Courses.Include(x => x.Author).ToList();
            //foreach (var c in courses)
            //{
            //   // var aa = context.Authors.Where(x => x.Id == c.AuthorId).FirstOrDefault();
            //    Console.WriteLine("{0} by {1}", c.Name, c.Author.Name);
            //}

            //explicit loading

            //var author = context.Authors.Single(a => a.Id == 1);

            //context.Entry(author).Collection(a => a.Courses).Query().Where(c => c.FullPrice == 0).Load();

            //context.Courses.Where(c => c.AuthorId == author.Id && c.FullPrice == 0).Load();

            //foreach (var course in author.Courses)
            //{

            //    Console.WriteLine("{0}", course.Name);
            //}



            //add object
            //context.Authors.Attach(author);
            //var authors = context.Authors.ToList();

            //var author = context.Authors.Single(a => a.Id == 1);

            //var course = new Course
            //{
            //   Name = "New Course 2",
            //   Description = "New Description",
            //   FullPrice = 19.95f,
            //   Level = 1,
            //   Author = author
            //};
            //context.Courses.Add(course);

            //update data
            //var course = context.Courses.Find(4);
            //course.Name = "New Name";
            //course.AuthorId = 1;

            //context.SaveChanges();

            //remove data
            //var course = context.Courses.Find(6);
            //context.Courses.Remove(course);
            //var author = context.Authors.Include(a => a.Courses).Single(a => a.Id == 2);
            //context.Courses.RemoveRange(author.Courses);
            //context.Authors.Remove(author);

            //context.SaveChanges();



            //change-traker
            //add-object
            context.Authors.Add(new Author { Name = "New Author" });

            //update-object
            var author = context.Authors.Find(3);
            author.Name = "Updated";

            //remove-object
            var another = context.Authors.Find(4);
            context.Authors.Remove(another);

            var entries = context.ChangeTracker.Entries();

            foreach(var entry in entries)
            {
                entry.Reload();
                Console.WriteLine(entry.State);
            }

            Console.ReadLine();

        }
    }
}
