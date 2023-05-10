using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace Code_first_1
{
    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=CarConnection")
        {
        }

        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .Property(e => e.Description)
                .IsRequired();
            modelBuilder.Entity<Author>()
                .HasMany(e => e.Courses)
                .WithOptional(e => e.Author)
                .HasForeignKey(e => e.Author_Id);

            modelBuilder.Entity<Course>()
                .HasMany(e => e.Tags)
                .WithMany(e => e.Courses)
                .Map(m => m.ToTable("TagCourses").MapLeftKey("Course_Id"));
        }
    }
}
