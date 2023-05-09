namespace Code_first_1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCategoryTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                 "dbo.Categories",
                 c => new
                 {
                     id = c.Int(nullable: false, identity: false),
                     name = c.String(),
                 })
                 .PrimaryKey(t => t.id);
            Sql("INSERT INTO Categories VALUES(1,'SHIVANGI')");
            Sql("INSERT INTO Categories VALUES(2,'DIPALI')");
        }
        
        public override void Down()
        {
            

            DropTable("dbo.Categories");


        }
    }
}
