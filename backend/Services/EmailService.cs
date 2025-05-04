using MimeKit;
using MailKit.Net.Smtp;

namespace WebApi.Services
{
    public class EmailService : IEmailService
    {
        public async Task SendEmailAsync(string to, string subject, string body)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("shiv", "bydq kknt airh osqe"));
            message.To.Add(new MailboxAddress("", to));
            message.Subject = subject;
            message.Body = new TextPart("plain") { Text = body };

            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, false);
            await client.AuthenticateAsync("shivghyar538@gmail.com", "QWer@12*");
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }
}
