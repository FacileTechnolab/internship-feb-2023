namespace CodeFirst_Workflow.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialModel : DbMigration
    {
        public override void Up()
        {
           
           
            DropPrimaryKey("dbo.TagCourses");
            //CreateTable(
            //    "dbo.Tg",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.Authors",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Name = c.String(),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.Courses",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Title = c.String(),
            //            Description = c.String(),
            //            Level = c.Int(nullable: false),
            //            FullPrice = c.Single(nullable: false),
            //            Author_Id = c.Int(),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .Index(t => t.Author_Id);
            
            //CreateTable(
            //    "dbo.TagCour",
            //    c => new
            //        {
            //            Course_Id = c.Int(nullable: false),
            //            Tag_Id = c.Int(nullable: false),
            //        })
            //    .PrimaryKey(t => new { t.Course_Id, t.Tag_Id })
            //    .ForeignKey("dbo.Cour", t => t.Course_Id, cascadeDelete: true)
            //    .ForeignKey("dbo.Tg", t => t.Tag_Id, cascadeDelete: true)
            //    .Index(t => t.Course_Id)
            //    .Index(t => t.Tag_Id);
            
            //AddPrimaryKey("dbo.TagCourses", new[] { "Course_Id", "Tag_Id" });
        }
        
        public override void Down()
        {
            //DropForeignKey("dbo.TagCour", "Tag_Id", "dbo.Tg");
            //DropForeignKey("dbo.TagCour", "Course_Id", "dbo.Cour");
            //DropIndex("dbo.TagCour", new[] { "Tag_Id" });
            //DropIndex("dbo.TagCour", new[] { "Course_Id" });
            //DropIndex("dbo.Courses", new[] { "Author_Id" });
            //DropPrimaryKey("dbo.TagCourses");
            //DropTable("dbo.TagCour");
            //DropTable("dbo.Courses");
            //DropTable("dbo.Authors");
            //DropTable("dbo.Tg");
            //AddPrimaryKey("dbo.TagCourses", new[] { "Tag_Id", "Course_Id" });
           
           
        }
    }
}
