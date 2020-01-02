using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class BaseLocationDataContext : DbContext
    {
        public BaseLocationDataContext(DbContextOptions options) : base(options)
        {
        }

        // TODO: Add DbSets
    }
}