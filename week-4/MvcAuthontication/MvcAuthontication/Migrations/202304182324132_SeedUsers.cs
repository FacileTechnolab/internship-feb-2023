namespace MvcAuthontication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'384fa2cd-9875-427c-9611-c9aff8d1a3a5', N'dipali12@gmail.com', 0, N'AFGOEv3Xzk8UbrBHvTFrd/wJN/dJ2ZBsKyuFI9y7fDl24XkgU4W59ePz1OGXbSGe6w==', N'90eacf61-d02d-47c3-99df-b0587dd4be2a', NULL, 0, 0, NULL, 1, 0, N'dipali12@gmail.com')

");
        }
        
        public override void Down()
        {
        }
    }
}
