namespace firstdemonewmvcasp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class added_customers_tbl : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Cus_Id = c.Int(nullable: false, identity: true),
                        Cus_Name = c.String(),
                        Cus_Salary = c.Int(nullable: false),
                        IsSubscribedToNewsletter = c.String(nullable: false, maxLength: 255),
                        IsSubscribedToNews = c.Boolean(nullable: false),
                        Birthdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Cus_Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Customers");
        }
    }
}
