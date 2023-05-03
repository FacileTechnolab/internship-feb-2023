using System.Collections.Generic;

namespace DbFirst
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Course> Courses { get; set; } 
    }
}
