namespace HtmltoMvc.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UsersTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Confirm_Password", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "Confirm_Password");
        }
    }
}
