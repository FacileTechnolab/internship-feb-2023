using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Tracing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAnnotation
{
    public  class Course
    {
        public Course() {
          Tag1=  new HashSet<Tag>();
        }
        public int Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        [Required]
        [MaxLength(255)]
        public string Description { get; set; }

        public int level { get; set;}
        public float FullPrice { get; set; }
        [ForeignKey("Author")]
        public int AuthorId { get; set; }
        public virtual Author Author { get; set; }
        public virtual ICollection<Tag> Tag1 { get; set; }
    }
}
