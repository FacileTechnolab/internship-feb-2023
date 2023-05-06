namespace CodeFirstExistingDatabase.Migrations
{
    using System;
    using System.Collections.ObjectModel;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Cryptography;

    internal sealed class Configuration : DbMigrationsConfiguration<CodeFirstExistingDatabase.Plutocontext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;

        }

        protected override void Seed(CodeFirstExistingDatabase.Plutocontext context)
        {
            context.Authors.AddOrUpdate(a => a.Name,
                new Author
                {
                    Name = "Author 1",
                    Courses = new Collection<Course>()
                    (
                        new Course() { Name = "Course for Author 1", Description = "Description" }

                    )
                });
        }
    }
    }
