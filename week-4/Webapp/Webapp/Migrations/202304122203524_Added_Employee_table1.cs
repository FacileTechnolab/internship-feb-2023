namespace Webapp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Added_Employee_table1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Customer_Id = c.Int(nullable: false, identity: true),
                        Customer_Name = c.String(nullable: false, maxLength: 255),
                        Customer_salary = c.String(),
                    })
                .PrimaryKey(t => t.Customer_Id);
            
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmployeeId = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false, maxLength: 255),
                        Addess = c.String(),
                        IsSubscribedToNewsletter = c.Boolean(nullable: false),
                        MemberShipTypeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.EmployeeId)
                .ForeignKey("dbo.MemberShipTypes", t => t.MemberShipTypeId, cascadeDelete: true)
                .Index(t => t.MemberShipTypeId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Employees", "MemberShipTypeId", "dbo.MemberShipTypes");
            DropIndex("dbo.Employees", new[] { "MemberShipTypeId" });
            DropTable("dbo.Employees");
            DropTable("dbo.Customers");
        }
    }
}
