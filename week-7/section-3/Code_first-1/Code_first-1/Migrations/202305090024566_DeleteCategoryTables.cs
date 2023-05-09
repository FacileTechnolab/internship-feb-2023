namespace Code_first_1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteCategoryTables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo._Categories",
                c => new
                {
                    id = c.Int(nullable: false, identity: true),
                    name = c.String(),
                })
                .PrimaryKey(t => t.id);
            Sql("INSERT INTO _Categories(name)SELECT name  FROM Categories");
            //Sql("Create Table"); 
            DropTable("dbo.Categories");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                    })
                .PrimaryKey(t => t.id);
            Sql("INSERT INTO Categories(name)SELECT name  FROM _Categories");
            DropTable("dbo._Categories");

        }
    }
}
