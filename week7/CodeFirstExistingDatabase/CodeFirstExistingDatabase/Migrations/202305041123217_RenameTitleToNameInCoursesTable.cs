namespace CodeFirstExistingDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameTitleToNameInCoursesTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "Name", c => c.String(nullable:false));
            DropColumn("dbo.Courses", "Title");
            Sql("Update Courses SET Name=Title");
            //RenameColumn("dbo.Courses", "Title", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "Title", c => c.String(nullable:false));
            Sql("Update Courses SET Title=Name");
            DropColumn("dbo.Courses", "Name");
        }
    }
}
