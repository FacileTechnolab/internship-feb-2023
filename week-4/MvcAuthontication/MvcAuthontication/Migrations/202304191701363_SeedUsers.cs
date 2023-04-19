namespace MvcAuthontication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'06fbf4cd-61b7-4095-bcae-ee6f8fed3fc7', N'admin@gmail.com', 0, N'ACSPdw8o6L2kHaO0eKKIF6tzhZd+nn8SSPXNIVpludMHIhpPuOzasBd53is/sb2ACw==', N'386965e1-d5dc-44c7-91f3-3e9238db0798', NULL, 0, 0, NULL, 1, 0, N'admin@gmail.com')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'384fa2cd-9875-427c-9611-c9aff8d1a3a5', N'dipali12@gmail.com', 0, N'AFGOEv3Xzk8UbrBHvTFrd/wJN/dJ2ZBsKyuFI9y7fDl24XkgU4W59ePz1OGXbSGe6w==', N'90eacf61-d02d-47c3-99df-b0587dd4be2a', NULL, 0, 0, NULL, 1, 0, N'dipali12@gmail.com')

INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'29bbb55e-ec69-484d-bfcb-b5df70e42d84', N'Manage')

INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'06fbf4cd-61b7-4095-bcae-ee6f8fed3fc7', N'29bbb55e-ec69-484d-bfcb-b5df70e42d84')

");
        }
        
        public override void Down()
        {
        }
    }
}
