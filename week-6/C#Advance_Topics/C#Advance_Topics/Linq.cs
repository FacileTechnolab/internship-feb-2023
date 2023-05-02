using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
    public  class Linq 
    {

        public void Details()
        {
            //Linq Query operators

            //var cheaperbooks = from b in book
            //                 where b.price > 300
            //                 orderby b.Name
            //                 select b.Name;

            ////Linq Extension Method
            var books = new BooksRepository().GetBooks();
            //var cheapbooks = books.Where(b => b.price < 200)
            //                      .OrderBy(b => b.Name)
            //                      .Select(b => b.Name);



            //foreach (var book in cheaperbooks) 
            //{
            //   // Console.WriteLine(book);
            //    Console.WriteLine(book.book_id+ " "+ book.Name+ " "+book.price);
            //}


        // var book=   books.Single(b => b.Name == "Advanture town");
        var book=books.FirstOrDefault(b=>b.Name== "C# Basic");
            Console.WriteLine(book!= null);
          //  Console.WriteLine(book.Name);
        }




    }
}
