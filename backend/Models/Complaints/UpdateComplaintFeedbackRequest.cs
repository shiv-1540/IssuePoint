namespace WebApi.Models.Complaints;

public class UpdateComplaintFeedbackRequest
{
    public string Status { get; set; } = "Pending";
    public string FeedMsg { get; set; } = string.Empty;
}
