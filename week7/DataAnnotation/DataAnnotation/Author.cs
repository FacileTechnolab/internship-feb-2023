using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAnnotation
{
    public  class Author
    {
        public Author() {
            Course1 = new HashSet<Course>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Course> Course1 { get; set; }
    }
}
