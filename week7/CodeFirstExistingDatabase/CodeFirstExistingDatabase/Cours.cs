namespace CodeFirstExistingDatabase
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Security.Policy;

    [Table("Courses")]
    public partial class Course
    {
        public Course() {
            HashSet<Tag> Tags = new HashSet<Tag>();
        }
        public int Id { get; set; }

        public string T{ get; set; }

        public string Description { get; set; }
        public Category Category { get; set; }
        public  DateTime? DatePublished { get; set; }

        public int Level { get; set; }

        public float FullPrice { get; set; }

        public int? Author_Id { get; set; }

        public int? Tag_Id { get; set; }

        public virtual Author Author { get; set; }

        public virtual Tag Tag { get; set; }
    }
}
