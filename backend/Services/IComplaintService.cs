namespace WebApi.Services;
using WebApi.Entities;
using WebApi.Models.Complaints;


public interface IComplaintService
{
    IEnumerable<Complaint> GetAll();
    Complaint GetById(int id);
    

    void Create(CreateComplaintRequest model);
    void Update(int id, UpdateComplaintRequest model);
    void Delete(int id);
    Task<bool> UpdateFeedback(UpdateFeedbackRequest model);
    // ✅ Use this instead:

    void Update(int id ,UpdateComplaintFeedbackRequest model);
}
