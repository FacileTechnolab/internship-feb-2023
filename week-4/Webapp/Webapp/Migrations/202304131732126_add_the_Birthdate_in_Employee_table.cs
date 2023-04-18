namespace Webapp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_the_Birthdate_in_Employee_table : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Employees", "Birthdate", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Employees", "Birthdate");
        }
    }
}
