using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Book
{
    [Key]
    public int Id { get; set; }

    [Column("lv_titulo")]
    public string Title { get; set; }

    [Column("lv_autor")]
    [DisplayName("Autor do livro")]
    [MaxLength(56, ErrorMessage = "Tamanho máximo de 56 caracteres")]
    public string Author { get; set; }

    [Column("lv_publicadora")]
    [MaxLength(30, ErrorMessage = "Tamanho máximo de 30 caracteres")]
    public string Publisher { get; set; }

    [Column("lv_datapublicacao")]
    public DateTime PublicationDate { get; set; }
    [Column("lv_paginas")]
    public int Pages { get; set; }

    [Column("lv_idioma")]
    [MaxLength(15, ErrorMessage = "Tamanho máximo de 15 caracteres")]
    public string Language { get; set; }

    [Column("lv_img")]
    public string ImgUrl { get; set; }
}