using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseFirst
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var context = new DemoEntities();
            var post = new Post1()
            {
                Body = "Body",
                DatePublishes = DateTime.Now,
                Title = "Title",
                PostId = 1
            };
            context.Post1.Add(post);
            context.SaveChanges();
        }
    }
}
