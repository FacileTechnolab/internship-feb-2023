namespace Code_first_1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteCategoryColumnfromCoursesTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Courses", "Category_id", "dbo.Categories");
            DropIndex("dbo.Courses", new[] { "Category_id" });
            DropColumn("dbo.Courses", "Category_id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "Category_id", c => c.Int());
            CreateIndex("dbo.Courses", "Category_id");
            AddForeignKey("dbo.Courses", "Category_id", "dbo.Categories", "id");
        }
    }
}
