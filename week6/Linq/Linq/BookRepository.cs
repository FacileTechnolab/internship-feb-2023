using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linq
{
    internal class BookRepository
    {
        public IEnumerable<Book> GetBooks()
        {
            return new List<Book>
            {
                new Book() {Title="Ado.net Step by step ",Price=5},
                 new Book() {Title="Asp.net MVC ",Price=9.99f},
                 new Book() {Title="Asp.net web Api",Price=12},
                 new Book() {Title="C# Advanced Topoics",Price=7},
                  new Book() {Title="C# Advanced Topoics",Price=9}



        };
            }
    }

    }

