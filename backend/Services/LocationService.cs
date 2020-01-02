using backend.Data;

namespace backend.Services
{
    public class LocationService
    {
        private readonly BaseLocationDataContext _context;

        public LocationService(BaseLocationDataContext context)
        {
            _context = context;
        }

        // TODO: Add CRUD functionality
    }
}