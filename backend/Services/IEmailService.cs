using WebApi.Entities;
using WebApi.Models.Complaints;

namespace WebApi.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string to, string subject, string body);
    }
}
