namespace WebApi.Entities;

using System.Text.Json.Serialization;
public class Complaint
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string Category { get; set; }

    public string Description { get; set; }

    public string Imgs { get; set; }

    public bool IsPrivate { get; set; } = false;

    public bool IsAnonymous { get; set; } = false;

    public int NoOfLikes { get; set; } = 0;

    public int NoOfDislikes { get; set; } = 0;

    public string Status { get; set; } = "Pending";

    public DateTime created_at { get; set; } = DateTime.UtcNow;

    public string FeedMsg { get; set; } ="";

}
