namespace CodeFirst_Workflow.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameTitleToNameInCoursTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "Name", c => c.String(nullable:false));
            Sql("UPDATE Courses SET Name= Title");
            DropColumn("dbo.Courses", "Title");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "Title", c => c.String(nullable: false));
            Sql("UPDATE Courses SET Title= Name");

            DropColumn("dbo.Courses", "Name");
        }
    }
}
