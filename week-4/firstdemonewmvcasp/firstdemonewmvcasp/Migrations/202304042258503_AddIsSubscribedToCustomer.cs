namespace firstdemonewmvcasp.Migrations
{
    using firstdemonewmvcasp.Models;
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddIsSubscribedToCustomer : DbMigration
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
                        IsSubscribedToNewsletter = c.Boolean(nullable: false),
                    MemberShipTypeId = c.Byte(nullable: false),
                })
                .PrimaryKey(t => t.Cus_Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Customers");
        }
    }
}
