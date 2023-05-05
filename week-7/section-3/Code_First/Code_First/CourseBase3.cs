using System;
using System.Collections.Generic;

namespace Code_First
{
    public class CourseBase3
    {
        private IList<Tag> tags;
        public Nullable<int> Author_Id { get; set; }
        public string Description { get; set; }
        public string Description { get; set; }
        public float FullPrice { get; set; }
        public float FullPrice { get; set; }

        public int Id { get; set; }

        public int Id { get; set; }
        public int Level { get; set; }
        public CourseLevel Level { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tag> Tags { get; set; }
        public IList<Tag> Tags { get => tags; set => tags = value; }
        public string Title { get; set; }
        public string Title { get; set; }
    }
}