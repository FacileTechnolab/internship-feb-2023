USE [firstdemonewmvcaspContext-20230404154621]
GO

/****** Object: Table [dbo].[Customers] Script Date: 4/10/2023 4:44:32 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customers] (
    [Cus_Id]                   INT            IDENTITY (1, 1) NOT NULL,
    [Cus_Name]                 NVARCHAR (MAX) NULL,
    [Cus_Salary]               INT            NOT NULL,
    [IsSubscribedToNewsletter] NVARCHAR (255) NOT NULL,
    [IsSubscribedToNews]       BIT            NOT NULL,
    [Birthdate]                DATETIME       NULL
);


Alter table Customers 
Add  MembershipTypeId INT;