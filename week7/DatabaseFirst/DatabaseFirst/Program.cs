using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseFirst
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var context=new DEMOEntities();
            var post = new Post()
            {
                Body = "Body",
                DatePublished = DateTime.Now,
                Title = "Title",
                PostId = 1
            };
            context.Posts.Add(post);    
            context.SaveChanges();
        }
    }
}
