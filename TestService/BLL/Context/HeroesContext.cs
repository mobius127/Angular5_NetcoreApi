
namespace TestService.BLL.Context
{
    using Microsoft.EntityFrameworkCore;
    using TestService.BLL.Entities;

    public class HeroesContext : DbContext
    {
        public HeroesContext(DbContextOptions<HeroesContext> options) : base(options)
        {

        }

        public DbSet<Hero> Heroes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hero>().ToTable("Heroes");

        }
    }
}