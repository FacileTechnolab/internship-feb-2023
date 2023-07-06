using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FirstCrudPoject.Migrations
{
    /// <inheritdoc />
    public partial class Addedto_Discountcolumn_inticketentity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Discount",
                table: "Tickets",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discount",
                table: "Tickets");
        }
    }
}
