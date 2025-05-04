namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;

public class CreateRequest
{
    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    [Required]
    [RegularExpression("^(student|admin|staff)$", ErrorMessage = "Role must be 'student', 'admin', or 'staff'.")]
    public string Role { get; set; }
}
