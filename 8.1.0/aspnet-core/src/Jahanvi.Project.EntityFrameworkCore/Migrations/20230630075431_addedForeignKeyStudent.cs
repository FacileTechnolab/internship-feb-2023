using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Jahanvi.Project.Migrations
{
    /// <inheritdoc />
    public partial class addedForeignKeyStudent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_course_student_StudentId",
                table: "course");

            migrationBuilder.DropIndex(
                name: "IX_course_StudentId",
                table: "course");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "course");

            migrationBuilder.AddColumn<int>(
                name: "CourseId",
                table: "student",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_student_CourseId",
                table: "student",
                column: "CourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_student_course_CourseId",
                table: "student",
                column: "CourseId",
                principalTable: "course",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_student_course_CourseId",
                table: "student");

            migrationBuilder.DropIndex(
                name: "IX_student_CourseId",
                table: "student");

            migrationBuilder.DropColumn(
                name: "CourseId",
                table: "student");

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "course",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_course_StudentId",
                table: "course",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_course_student_StudentId",
                table: "course",
                column: "StudentId",
                principalTable: "student",
                principalColumn: "Id");
        }
    }
}
