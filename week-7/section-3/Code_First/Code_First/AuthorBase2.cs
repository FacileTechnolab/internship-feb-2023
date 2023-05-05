using System.Collections.Generic;

namespace Code_First
{
    public class AuthorBase2
    {

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Course> Courses { get; set; }
        public IList<Course> Courses { get; set; }
    }
}