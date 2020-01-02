using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class BaseLocationDataContext : DbContext
    {
        public BaseLocationDataContext(DbContextOptions options) : base(options)
        {
        }

        // TODO: Add DbSets
    }
}