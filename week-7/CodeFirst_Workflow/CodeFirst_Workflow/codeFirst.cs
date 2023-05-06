using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace CodeFirst_Workflow
{
    public partial class codeFirst : DbContext
    {
        public codeFirst()
            : base("name=codeFirst")
        {
        }

        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Author1> Authors1 { get; set; }
        public virtual DbSet<Cour> Cours { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<Tg> Tgs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>()
                .HasMany(e => e.Cours)
                .WithOptional(e => e.Author)
                .HasForeignKey(e => e.Author_Id);

            modelBuilder.Entity<Author1>()
                .HasMany(e => e.Courses)
                .WithOptional(e => e.Author)
                .HasForeignKey(e => e.Author_Id);

            modelBuilder.Entity<Cour>()
                .HasMany(e => e.Tgs)
                .WithMany(e => e.Cours)
                .Map(m => m.ToTable("TagCour").MapLeftKey("Course_Id").MapRightKey("Tag_Id"));

            modelBuilder.Entity<Course>()
                .HasMany(e => e.Tg)
                .WithMany(e => e.Courses)
                .Map(m => m.ToTable("TagCourses").MapLeftKey("Course_Id"));
        }
    }
}
