using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace C_Advance_Topics
{
    public  class BooksRepository
    {

        public IEnumerable<Books> GetBooks()
        {
            return new List<Books>()
            {
                new Books() {book_id = 1,Name="Advantage of c",price=110},
                new Books(){book_id = 2,Name="C# Basic",price=220},
                new Books(){book_id = 3,Name="Advanture town",price=330}
            };
        }
        
            
    
    }
}
