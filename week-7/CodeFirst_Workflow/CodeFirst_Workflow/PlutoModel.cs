using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Web;
using System.Linq;

namespace CodeFirst_Workflow
{

    public partial class PlutoModel : DbContext
    {
        public PlutoModel()
            : base("name=PlutoModel")
        {
        }

        public virtual DbSet<Author> Authors { get; set; }

      
        public virtual DbSet<Cours> Courses { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        //public virtual DbSet<Category> Categories { get; set; }



        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Author>()
                .HasMany(e => e.Cours)
                .WithOptional(e => e.Author)
                .HasForeignKey(e => e.Author_Id);



            modelBuilder.Entity<Cours>()
                .HasMany(e => e.Tags)
                .WithMany(e => e.Courses)
                .Map(m => m.ToTable("TagCour").MapLeftKey("Course_Id").MapRightKey("Tag_Id"));

            //modelBuilder.Entity<Cours>()
            //    .HasMany(e => e.Tags)
            //    .WithMany(e => e.Courses)
            //    .Map(m => m.ToTable("TagCourses").MapLeftKey("Course_Id"));
        }
    }
}