﻿namespace Code_first_1.Migrations
{
    using System;
    using System.Collections.ObjectModel;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Code_first_1.Model1>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Code_first_1.Model1 context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            context.Authors.AddOrUpdate(a => a.Name,
                new Author
                {
                    Name="Author 1",
                    Courses=new Collection<Course>
                    {
                        new Course (){Name="Author1",Description="dedjhszds"}
                    }

                });
        }
    }
}
