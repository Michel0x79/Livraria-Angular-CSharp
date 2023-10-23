using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<LivrariaDbContext>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(opt => {
    opt.AddPolicy("AllowAll", policy => {
        policy.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});


var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("AllowAll");

//entrypoins para acesso aos livros
app.MapPost("v1/livrosrange", async (LivrariaDbContext mContext, Book[] newBook) => {
    await mContext.Books.AddRangeAsync(newBook);
    await mContext.SaveChangesAsync();

    return Results.Created<Book[]>($"v1/livrosrage/",await Task.FromResult(newBook));
});

app.MapPost("v1/livros", async (LivrariaDbContext mContext, Book newBook) => {
    await mContext.Books.AddRangeAsync(newBook);
    await mContext.SaveChangesAsync();

    return Results.Created<Book>($"v1/livrosrage/{newBook.Id}",await Task.FromResult(newBook));
});

app.MapGet("v1/livros", async (LivrariaDbContext context) =>
{
    return await context.Set<Book>().AsNoTracking().ToListAsync();
});

app.MapGet("v1/livros/{id}", async (LivrariaDbContext mContext, int id) => 
{
    return await mContext.Set<Book>().Where(l => l.Id.Equals(id)).FirstOrDefaultAsync();
});

app.MapPut("v1/livros/{id}", async (LivrariaDbContext mContext, Book book, int id) => {
    if(!book.Id.Equals(id)) return Results.NotFound("Livro não corresponde ao id informado.");
    mContext.Set<Book>().Update(book);
    //mContext.Entry(book).State = EntityState.Modified;
    await mContext.SaveChangesAsync();

    return Results.Ok(book);
});

app.MapDelete("v1/livros/{id}", async (LivrariaDbContext mContext, int id) => {
    var rmLivro = await mContext.Set<Book>().Where(livro => livro.Id.Equals(id)).FirstOrDefaultAsync();
    if(rmLivro is null) return Results.NotFound("Livro não encontrado.");
    
    mContext.Set<Book>().Remove(rmLivro);
    await mContext.SaveChangesAsync();
    return Results.Ok($"Livro {rmLivro.Title} deletado.");

});

app.Run();
