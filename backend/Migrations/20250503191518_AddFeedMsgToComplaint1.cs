using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations
{
    public partial class AddFeedMsgToComplaint1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "ix_complaint_user_id",
                table: "complaint",
                column: "user_id");

            migrationBuilder.AddForeignKey(
                name: "fk_complaint_users_user_id",
                table: "complaint",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_complaint_users_user_id",
                table: "complaint");

            migrationBuilder.DropIndex(
                name: "ix_complaint_user_id",
                table: "complaint");
        }
    }
}
