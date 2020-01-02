using Microsoft.AspNetCore.Mvc;

namespace BaseLocationBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthController : ControllerBase
    {
        public IActionResult Index()
        {
            return new ObjectResult("We're up and healthy");
        }
    }
}