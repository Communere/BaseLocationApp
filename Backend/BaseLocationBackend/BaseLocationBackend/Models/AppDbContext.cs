using Microsoft.EntityFrameworkCore;

namespace BaseLocationBackend.Models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // TODO: Change the connection string to your own
            optionsBuilder.UseSqlServer("Server=localhost;Database=Locations;Integrated Security=true");
        }
    }
}
