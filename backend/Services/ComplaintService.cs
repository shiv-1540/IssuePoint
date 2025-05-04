using AutoMapper;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models.Complaints;
using WebApi.Services;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Services
{
    public class ComplaintService : IComplaintService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        internal static readonly object Complaint;

        public ComplaintService(DataContext context, IMapper mapper, IEmailService emailService)
        {
            _context = context;
            _mapper = mapper;  
            _emailService = emailService;
        }

        public IEnumerable<Complaint> GetAll()
        {
            return _context.Complaint;
        }
        private readonly IEmailService _emailService;

        public ComplaintService(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public Complaint GetById(int id)
        {
            return getComplaint(id);
        }

        // This is main update feedback wala....!
        public async Task<bool>  UpdateFeedback(UpdateFeedbackRequest model)
        {
            Console.WriteLine("Updating complaint ID: " + model.Id);

            var complaint = getComplaint(model.Id);
            if (complaint == null)
                return false;
               
            complaint.FeedMsg = model.FeedMsg;
            complaint.Status="Resolved";
            
            // Optional but recommended
            _context.SaveChanges(); // 🚨 This is essential
              // Get user email using UserId from complaint
        //    var userExists = _context.Users.Any(u => u.Id == complaint.UserId);
        //    Console.WriteLine("User exists: " + userExists); 

        //     if (user == null)
        //         throw new Exception("User not found");


        //     // Send email to user
        //     var subject = "📢 Feedback on Your Complaint";
        //     var body = $"Dear {user.Name},\n\nYour complaint has been reviewed. Here's the admin feedback:\n\n\"{model.FeedMsg}\"\n\nThank you for using our platform.";

        //     await _emailService.SendEmailAsync(user.Email, subject, body);

            return true;
        }


        public void Create(CreateComplaintRequest model)
        {
            var complaint = _mapper.Map<Complaint>(model);
            _context.Complaint.Add(complaint);

            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while saving complaint: " + ex.InnerException?.Message);
                throw;
            }
        }

        public void Update(int id, UpdateComplaintRequest model)
        {
            var complaint = getComplaint(id);

            // Optionally: Add any custom validation here

            _mapper.Map(model, complaint);
            _context.Complaint.Update(complaint);
            _context.SaveChanges();
        }
        public void Update(int id,UpdateComplaintFeedbackRequest model){
            var complaint = getComplaint(id);
            if (complaint == null)
                 NotFound(new { message = "Complaint not found." });
            complaint.Status=model.Status;
            complaint.FeedMsg=model.FeedMsg;
            _context.SaveChanges();
        }

        public void UpdateFeedbackOnly(int id, UpdateFeedbackRequest model)
            {
                var complaint = getComplaint(id);
                if (complaint == null)
                    throw new KeyNotFoundException("Complaint not found.");

                complaint.FeedMsg = model.FeedMsg;
                _context.SaveChanges();
            }


        private void NotFound(object value)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            var complaint = getComplaint(id);
            _context.Complaint.Remove(complaint);
            _context.SaveChanges();
        }

        // helper
        private Complaint getComplaint(int id)
        {
            var complaint = _context.Complaint.Find(id);
            if (complaint == null) throw new KeyNotFoundException("Complaint not found");
            return complaint;
        }
    }
}
