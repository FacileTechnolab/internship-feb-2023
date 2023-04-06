namespace firstdemonewmvcasp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PopulateMemberShipTypes : DbMigration
    {
        public override void Up()
        {
            Sql("insert into MemberShipTypes(Id, SignUpFee, DurationInMonth, DiscountRate) VALUES(1, 0 , 0, 0)");
            Sql("insert into MemberShipTypes(Id, SignUpFee, DurationInMonth, DiscountRate) VALUES(2, 50 , 10, 40)");
            Sql("insert into MemberShipTypes(Id, SignUpFee, DurationInMonth, DiscountRate) VALUES(3, 70 , 90, 0)");
            Sql("insert into MemberShipTypes(Id, SignUpFee, DurationInMonth, DiscountRate) VALUES(4, 30 , 100, 60)");
        }
        
        public override void Down()
        {
        }
    }
}
