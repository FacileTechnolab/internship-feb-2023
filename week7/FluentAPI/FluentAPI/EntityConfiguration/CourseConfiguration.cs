﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity.ModelConfiguration;
using System.Threading.Tasks;
using DataAnnotations;

namespace FluentAPI.EntityConfiguration
{
    public class CourseConfiguration : EntityTypeConfiguration<Course>
    {
        public CourseConfiguration()
        {
            ToTable("tbl_Course");
            HasKey(c => c.Id);
            Property(c => c.Description)
           .IsRequired()
           .HasMaxLength(2000);
         
            Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(255);

           

            HasRequired(c => c.Author)
            .WithMany(a => a.Courses)
            .HasForeignKey(c => c.AuthorId)
            .WillCascadeOnDelete(false);

            HasRequired(c => c.Cover)
           .WithRequiredPrincipal(c => c.Course);


            HasMany(c => c.Tags)
            .WithMany(t => t.Courses)
            .Map(m =>
            {
                m.ToTable("CourseTags");
                m.MapLeftKey("CourseId");
                m.MapRightKey("TagId");
            });


           

        }
    }
}
