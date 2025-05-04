namespace WebApi.Models.Complaints;

using System.ComponentModel.DataAnnotations;


public class UpdateFeedbackRequest
{
    public int Id { get; set; }        // complaint ID
    public string FeedMsg { get; set; } // feedback message
}

public class CreateComplaintRequest
{
    public int UserId { get; set; }  // If anonymous, default to 0

    [Required]
    public string Category { get; set; }

    [Required]
    public string Description { get; set; }

    public string Imgs { get; set; } = string.Empty;

    public bool IsPrivate { get; set; } = false;

    public bool IsAnonymous { get; set; } = false;

    public int NoOfLikes { get; set; } = 0;

    public int NoOfDislikes { get; set; } = 0;
     public DateTime created_at { get; set; } = DateTime.UtcNow;
}
