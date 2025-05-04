using Microsoft.AspNetCore.Mvc;
using WebApi.Models.Users;
using WebApi.Helpers;
using WebApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;

        public AuthController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _context.Users
                .SingleOrDefaultAsync(u => u.Email == request.Email);

            if (user == null)
                return Unauthorized("Invalid email or password");

            // TODO: use hashed password comparison in production
            if (user.Password != request.Password)
                return Unauthorized("Invalid email or password");

            // Optionally return a token or session key
            return Ok(new
            {
                message = "Login successful",
                user = new { user.Id, user.Name, user.Email, user.Role }
            });
        }
    }
}
