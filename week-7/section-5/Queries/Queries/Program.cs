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



            // Linq query syntax

            //var query =
            //    from c in context.Courses
            //    where c.Name.Contains("C#")
            // orderby  c.Name
            // select c;

            //foreach (var course in query)
            //{
            //    Console.WriteLine(course.Name);
            //}


            //Extension method
            //var courses = context.Courses
            //    .Where(c=>c.Name.Contains("c#"))
            //    .OrderBy(c=>c.Name);

            //foreach (var course in courses)
            //{
            //    Console.WriteLine(course.Name);
            //}


            //orderby

            //var query =
            //    from c in context.Courses
            //    where  c.AuthorId == 1
            //    orderby c.Level descending, c.Name
            //    select c;


            // prejection


            //var query =
            //    from c in context.Courses
            //    where c.AuthorId == 1
            //    orderby c.Level descending, c.Name
            //    select new {Name=c.Name,Author=c.Author.Name};


            //group by

            //var query=
            //    from c in context.Courses
            //    group c by c.Level 
            //    into g
            //    select g;

            //foreach ( var group in query )
            //{

            //    Console.WriteLine( group.Key );

            //    foreach(var course in group)
            //        Console.WriteLine("\t{0}", course.Name );    
            //}

            //foreach (var group in query)
            //{

            //    Console.WriteLine("{0} ({1})",group.Key,group.Count());


            //}

            //joining method
            //inner join ,group join,cross join
            //var query =
            //    from c in context.Courses
            //    join a in context.Authors on c.AuthorId equals a.Id
            //    select new { CourseName = c.Name, AuthorName =a.Name };


            //foreach (var c in query) 
            //{
            //    Console.WriteLine(c);
            //}

            //Console.ReadLine();

            //group join 

            //var query =
            //    from a in context.Authors
            //    join c in context.Courses on a.Id equals c.AuthorId into g
            //    select new { AuthorName = a.Name, Courses = g.Count() };

            //foreach ( var v in query ) 
            //{
            //    Console.WriteLine( "{0}({1})", v.AuthorName,v.Courses);
            //}


            // cross join 

            //var query =
            //    from a in context.Authors
            //    from  c in context.Courses
            //    select new { AuthorName = a.Name, CourseName = c.Name};

            //foreach (var v in query)
            //{
            //    Console.WriteLine("{0} - {1}", v.AuthorName, v.CourseName);
            //}


            //Linq Extension method 
            // rendering
            //var courses=context.Courses.Where(c => c.Level == 1);

            //ordering

            //var courses = context.Courses
            //   .Where(c => c.Level == 1)
            //   .OrderByDescending(c => c.Name)
            //   .ThenByDescending(c => c.Level);

            //projection
            // var tags = context.Courses
            //.Where(c => c.Level == 1)
            //.OrderByDescending(c => c.Name)
            //.ThenByDescending(c => c.Level)
            ////.Select(c=>c.Tags);
            //.SelectMany(c => c.Tags);

            //foreach(var c in courses) 
            //{

            //    foreach(var tag in c)
            //        Console.WriteLine(tag.Name);
            //}


            //foreach (var c in tags)
            //{


            //        Console.WriteLine(c.Name);
            //}

            //Console.ReadLine();


            // set oprators

            //var tags = context.Courses
            //   .Where(c => c.Level == 1)
            //   .OrderByDescending(c => c.Name)
            //   .ThenByDescending(c => c.Level)
            //   .SelectMany(c => c.Tags)
            //    .Distinct();

            //foreach (var c in tags)
            //{


            //    Console.WriteLine(c.Name);
            //}

            //grouping


            //var groups= context.Courses
            //    .GroupBy(x => x.Id);

            //foreach (var group in groups)
            //{
            //    Console.WriteLine("key :"+group.Key);

            //    foreach (var course in group)
            //        Console.WriteLine("\t" + course.Name);
            //}

            //joining

            //context.Courses.Join(context.Authors,
            //    c => c.AuthorId,
            //    a => a.Id,
            //    (course, author) => new
            //{
            //    CourseName = course.Name,
            //    AuthorName = author.Name,
            //});

            //group join
            //context.Authors.GroupJoin(context.Courses,a=>a.Id,c=> c.AuthorId, (author, courses) => new
            //{
            //    Authors= author.Name,
            //    Courses= courses.Count(),
            //});

            //courses return second page 
            //var courses=  context.Courses.Skip(10).Take(10);


            //Element Operators

            //context.Courses.OrderBy(c => c.Level).FirstOrDefault(c => c.FullPrice > 100);
            //context.Courses.SingleOrDefault(c => c.Id == 1);    


            //Quantifying

            //var allAbove10Dollars = context.Courses.All(c => c.FullPrice > 10);
            //context.Courses.Any(c => c.Level == 1);

            //Aggregating

            //var count = context.Courses.Count();
            //context.Courses.Max(c => c.FullPrice);
            //context.Courses.Min(c => c.FullPrice);
            //context.Courses.Average(c => c.FullPrice);



            //deffered execution

            //var courses=context.Courses;

            //var courses = context.Courses.ToList().Where(c => c.IsBeginnerCourse == true);
            //foreach(var course in courses )
            //{
            //    Console.WriteLine(course.Name);
            //}

            //iQueryable explain

            //IQueryable<Course> courses=context.Courses;
            //var filtered = courses.Where(c => c.Level == 1);

            //foreach (var c in filtered)
            //     Console.WriteLine(c.Name);




            //Lazy loading 
            //var context = new PlutoContext();

            //var course= context.Courses.Single(c=>c.Id==2);
            //foreach(var tag  in course.Tags)
            //    Console.WriteLine(tag.Name);
            //Console.ReadLine();
            //n+1

            //var context = new PlutoContext();

            //var courses = context.Courses.Include(x => x.Author).ToList();

            //foreach (var c in courses)
            //    Console.WriteLine("{0} by{1}", c.Name, c.Author.Name);


            //Console.ReadLine();



            //explicit Loading


            var context = new PlutoContext();

            var author = context.Authors.Include(x => x.Courses).Single(a => a.Id == 2);
            //MSDN way
            context.Entry(author).Collection(a => a.Courses).Query().Where(c=>c.FullPrice==0).Load();

            context.Courses.Where(c => c.AuthorId == author.Id && c.FullPrice==0).Load();

            foreach (var c in author.Courses)
                Console.WriteLine("{0}", c.Name, c.Name);


            Console.ReadLine();
        }
    }
}
