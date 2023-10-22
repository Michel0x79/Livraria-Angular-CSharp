using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Livraria.API.Migrations
{
    /// <inheritdoc />
    public partial class inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    lv_titulo = table.Column<string>(type: "TEXT", nullable: false),
                    lv_autor = table.Column<string>(type: "TEXT", maxLength: 56, nullable: false),
                    lv_publicadora = table.Column<string>(type: "TEXT", maxLength: 30, nullable: false),
                    lv_datapublicacao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    lv_paginas = table.Column<int>(type: "INTEGER", nullable: false),
                    lv_idioma = table.Column<string>(type: "TEXT", maxLength: 15, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
