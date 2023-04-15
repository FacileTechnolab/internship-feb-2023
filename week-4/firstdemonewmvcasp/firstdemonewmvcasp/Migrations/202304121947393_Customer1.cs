namespace firstdemonewmvcasp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Customer1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Customers", "Cus_Name", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Customers", "Cus_Name", c => c.String());
        }
    }
}
