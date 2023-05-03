using System.Collections.Generic;

namespace DbFirst
{
    public class Tag1
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Course> Courses { get; set; }
    }
}
