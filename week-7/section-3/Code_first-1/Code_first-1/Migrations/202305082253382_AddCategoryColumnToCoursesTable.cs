namespace Code_first_1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCategoryColumnToCoursesTable : DbMigration
    {
        public override void Up()
        {
           
                
            
            AddColumn("dbo.Courses", "Category_id", c => c.Int());
            CreateIndex("dbo.Courses", "Category_id");
            AddForeignKey("dbo.Courses", "Category_id", "dbo.Categories", "id");
            Sql("UPDATE Courses SET Category_Id=1");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "Category_id", "dbo.Categories");
            DropIndex("dbo.Courses", new[] { "Category_id" });
            DropColumn("dbo.Courses", "Category_id");
            DropTable("dbo.Categories");
        }
    }
}
