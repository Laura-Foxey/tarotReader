using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace tarotReader_MVC.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tarots",
                columns: table => new
                {
                    TarotId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TarotName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TarotDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TarotLove = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TarotCareer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TarotWealth = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarots", x => x.TarotId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tarots");
        }
    }
}
