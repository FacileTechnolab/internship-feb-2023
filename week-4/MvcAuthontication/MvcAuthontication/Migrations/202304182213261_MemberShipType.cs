namespace MvcAuthontication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MemberShipType : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Cus_Id = c.Int(nullable: false, identity: true),
                        Cus_Name = c.String(nullable: false, maxLength: 255),
                        Cus_Salary = c.Int(nullable: false),
                        MemberShipTypeId = c.Byte(nullable: false),
                        IsSubscribedToNewsletter = c.String(nullable: false),
                        IsSubscribedToNews = c.Boolean(nullable: false),
                        Birthdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Cus_Id)
                .ForeignKey("dbo.MemberShipTypes", t => t.MemberShipTypeId, cascadeDelete: true)
                .Index(t => t.MemberShipTypeId);
            
            CreateTable(
                "dbo.MemberShipTypes",
                c => new
                    {
                        Id = c.Byte(nullable: false),
                        SignUpFee = c.Short(nullable: false),
                        DurationInMonth = c.Byte(nullable: false),
                        DiscountRate = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Customers", "MemberShipTypeId", "dbo.MemberShipTypes");
            DropIndex("dbo.Customers", new[] { "MemberShipTypeId" });
            DropTable("dbo.MemberShipTypes");
            DropTable("dbo.Customers");
        }
    }
}
