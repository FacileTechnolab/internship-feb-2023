using DocumentFormat.OpenXml.Wordprocessing;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAnnotation
{
    public class PlutoContext : DbContext
    {
        public PlutoContext()
             : base("name=DefaultConnection")
        {

        }
        public virtual DbSet<Author> Auther{ get; set; }
        public virtual DbSet<Course> Course1 { get; set; }
        public virtual DbSet<Tag> Tag1 { get; set; }

    }
}
