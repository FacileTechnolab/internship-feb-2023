using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linq
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var books=new BookRepository().GetBooks();
            //var book = books.SingleOrDefault(b => b.Title == "Asp.net MVC");
            //Console.WriteLine(book==null);
            //var book = books.First(b => b.Title == "C# Advanced Topoics");
            //Console.WriteLine(book.Title+""+book.Price);
            //var count = books.Max(b => b.Price);
            //var count1= books.Min (b=> b.Price);
            //Console.WriteLine(count);
            //Console.WriteLine(count1);



            //Linq Extension Method
            books.Single();
            books.SingleOrDefault();
            books.First();
            books.FirstOrDefault();
            books.Last();
            books.LastOrDefault();
            books.Min();
            books.Count();
            books.Average(b => b.Price);
            books.Skip(5).Take(5);
            var totalPrices=books.Sum(b=>b.Price);
            Console.WriteLine(totalPrices);
            Console.ReadLine();
            //Linq Query Operator
            //var cheapBooks =
            //    from b in books
            //    where b.Price < 10
            //    orderby b.Title
            //    select b.Title;
            ////Linq Extension Methods
            //var cheapBooks = books
            //             .Where(b => b.Price < 10)
            //             .OrderBy(b => b.Title)
            //             .Select(b => b.Title); 
            //var cheapBooks=new List<Book>();
            //foreach (var book in books)
            //{
            //    if(book.Price < 10)
            //        cheapBooks.Add(book);
            //}
            //foreach (var book in cheapBooks)
            //    Console.WriteLine(book.Title+""+book.Price);
        }
    }
}
