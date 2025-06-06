namespace WebApi.Helpers;

using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;
    internal readonly object Complaints;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to mysql with connection string from app settings
        var connectionString = Configuration.GetConnectionString("ApiDatabase");
        options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).
        UseSnakeCaseNamingConvention();
    }

    public DbSet<Complaint> Complaint { get; set; }
    public DbSet<User> Users { get; set; }
    
}