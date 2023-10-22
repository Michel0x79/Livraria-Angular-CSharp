using Microsoft.EntityFrameworkCore;

class LivrariaDbContext : DbContext
{
    public DbSet<Book> Books { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("DataSource=Livraria.db; Cache=Shared");
    }
}