namespace CodeFirst_Workflow.Migrations
{
    using System;
    using System.Collections.ObjectModel;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CodeFirst_Workflow.PlutoModel>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CodeFirst_Workflow.PlutoModel context)
        {
            context.Authors.AddOrUpdate(a => a.Name,
                new Author
                {
                    Name = "Author 1",
                    Cours = new Collection<Cours>()
                    {
                        new Cours() {Name = "Course for Author 1", Description = "Description"}
                    }
                });
        }
    }
}
