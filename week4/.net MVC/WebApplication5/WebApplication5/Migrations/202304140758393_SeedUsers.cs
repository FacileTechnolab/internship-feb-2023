namespace WebApplication5.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'18b479b2-a9c3-46a3-be65-1d2af8f486f2', N'jahanvi@domain.com', 0, N'ANh1j2VF0gMab/BJN7T8D88ydBrpENo2pcHjtK/GGklaBiUm8rVpBVmu+9u70f02oQ==', N'1a147932-4ed1-4994-96cc-89fd82ebc3be', NULL, 0, 0, NULL, 1, 0, N'jahanvi@domain.com')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'6bd90bea-b170-4fdb-bb1a-22ece1f4f948', N'user@domain.com', 0, N'AO01/n3yEecjMqrAHOx/4UH2u+ZIzkAlVqyunGJVWry3tRsgtAfY5fX28RmSnFDRKA==', N'14a0608b-402d-4794-b11b-405d77b54292', NULL, 0, 0, NULL, 1, 0, N'user@domain.com')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'e95be7b1-c052-4e8d-99dc-454bf54480fd', N'guest@domain.com', 0, N'AHOFjKUxdRlPKZUOz2zKfi+Z486dzS8M83jeCxJCUg03eK1LdRtpd8t3Ktt2fsMUUg==', N'bc6f4900-ae42-4279-936a-b85168acd728', NULL, 0, 0, NULL, 1, 0, N'guest@domain.com')
INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'edda2cef-cab8-462f-995a-af93a41c5ef2', N'CanManageMovies')

INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'6bd90bea-b170-4fdb-bb1a-22ece1f4f948', N'edda2cef-cab8-462f-995a-af93a41c5ef2')

");
        }
        
        public override void Down()
        {
        }
    }
}
