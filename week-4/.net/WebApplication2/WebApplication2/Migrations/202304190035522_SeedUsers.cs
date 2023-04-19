namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@" INSERT INTO[dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES(N'03e37186-ab32-4742-aba3-db877956111e', N'mosh123@gamil.com', 0, N'AKrKhda5AVurWg2O0bG9XmhGCEP7Taz9VIieJomwSX18qA9U9yHjjiiKr53qm2WYog==', N'f70502b1-7557-4091-9dea-dba009e91238', NULL, 0, 0, NULL, 1, 0, N'mosh123@gamil.com')
INSERT INTO[dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES(N'05330fd1-751b-49d6-8491-2e38516683e6', N'hasi123@gmail.com', 0, N'ACn1JmdXt3fwNd47A5OF+TWg/Zi7KdLbWyhRPq6A1wmA1uMSxYJzqL2L0qnqZtBW1g==', N'fa731ac6-70c0-49da-bf6a-84996282943d', NULL, 0, 0, NULL, 1, 0, N'hasi123@gmail.com')
INSERT INTO[dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES(N'3f4cd8e7-9ccf-48fb-a1ed-7e7711759ad0', N'mili123@gmail.com', 0, N'AFIs4IzJf/FzFheQd6mE7i4cZZQAQcGHwWtu8zWlLeofcBbQUBzo61HhJ1KXVGLRtQ==', N'cae34c6d-35ba-405f-a368-c8c2a9446980', NULL, 0, 0, NULL, 1, 0, N'mili123@gmail.com')
INSERT INTO[dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES(N'44f8aa5a-d2a0-452a-9300-ce16abbe8003', N'hasi@gmail.com', 0, N'AB9ZCeJY/gKknvWCCTLHvqgpfD5ZrLvvupnJlO6wGjSalsPLq2jg7/vi6KM17Xesgg==', N'ceb09eae-1e94-401e-951a-0ec49b027f64', NULL, 0, 0, NULL, 1, 0, N'hasi@gmail.com')
INSERT INTO[dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES(N'891d2642-a117-45d8-b1ea-dafd56965083', N'miki123@gmail.com', 0, N'ABvbeXn9og2DGHTsFjma9X6tmBKyk+dljzKbf2nlpd0O5tEB1wT0URuwT2BAzC+nSQ==', N'23c6d8eb-b977-468a-b08c-bf7bf6d836c8', NULL, 0, 0, NULL, 1, 0, N'miki123@gmail.com') 
INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'ec8c016a-9fd3-462a-9090-4a0d3ef16c75', N'CanManagerMovie')
INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'6a7427a1-b2a6-465e-b62e-bc110f4724c4', N'Manager')
");



        }


        public override void Down()
        {
        }
    }
}
