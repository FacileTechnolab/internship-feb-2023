namespace Authentication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'a0c8051d-3e54-4a9b-b5a0-62478ce22199', N'shivangi.facile@outlook.com', 0, N'ACfxikGavImgwXhrhuymv6iFMxsaeLXIn6/1zmcq6HKbnmB67CXNknz7xCfrFEtLwQ==', N'a3b74cc2-979f-488e-a37b-601e8353a048', NULL, 0, 0, NULL, 1, 0, N'shivangi.facile@outlook.com')
INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'aaa4e746-b821-4a1e-98ae-8e35798952fc', N'CanManageEmployee')

");
        }
        
        public override void Down()
        {
        }
    }
}
