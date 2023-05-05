namespace CodeFirstExistingDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteDatePublishedColumnFromCoursesTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "Title", c => c.String());
            DropColumn("dbo.Courses", "Name");
            DropColumn("dbo.Courses", "DatePublished");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "DatePublished", c => c.DateTime());
            AddColumn("dbo.Courses", "Name", c => c.String());
            DropColumn("dbo.Courses", "Title");
        }
    }
}
