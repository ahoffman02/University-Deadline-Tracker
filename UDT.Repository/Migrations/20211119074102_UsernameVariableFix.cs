using Microsoft.EntityFrameworkCore.Migrations;

namespace UDT.Repository.Migrations
{
    public partial class UsernameVariableFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Numa",
                table: "Users",
                newName: "Name");

            migrationBuilder.AddColumn<int>(
                name: "Code",
                table: "Users",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Code",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Users",
                newName: "Numa");
        }
    }
}
