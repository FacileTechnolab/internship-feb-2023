using System.Collections.Generic;

namespace Code_First
{
    public class CourseBase2
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tag> Tags { get; set; }
        public IList<Tag> Tags { get => tags; set => tags = value; }
    }
}