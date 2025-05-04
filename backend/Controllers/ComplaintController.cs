using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models.Complaints;
using WebApi.Services;
using WebApi.Entities;


namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ComplaintController(IComplaintService complaintService, IMapper mapper) : ControllerBase
    {
        private readonly IComplaintService _complaintService = complaintService;
         private IMapper _mapper = mapper;

       

        [HttpGet]
        public IActionResult GetAll()
        {
            var complaints = _complaintService.GetAll();
            return Ok(complaints);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var complaint = _complaintService.GetById(id);
            return Ok(complaint);
        }

        [HttpPost]
        public IActionResult Create(CreateComplaintRequest model)
        {
            _complaintService.Create(model);
            return Ok(new { message = "Complaint created successfully" });
        }

        // [HttpPost]
        // public IActionResult CreateComplaint([FromBody] CreateComplaintRequest request)
        // {
        //     if (request.IsAnonymous)
        //     {
        //         request.UserId = 0;
        //     }

        //     var complaint = new Complaint
        //     {
        //         UserId = request.UserId,
        //         Category = request.Category,
        //         Description = request.Description,
        //         Imgs = request.Imgs,
        //         IsPrivate = request.IsPrivate,
        //         IsAnonymous = request.IsAnonymous,
        //         NoOfLikes = request.NoOfLikes,
        //         NoOfDislikes = request.NoOfDislikes,
        //         Status = "Pending",
        //         CreatedAt = DateTime.UtcNow
        //     };

        //     ComplaintService.Complaint.Add(complaint);
        //     _context.SaveChanges();

        //     return Ok(new { Message = "Complaint submitted successfully", ComplaintId = complaint.Id });
        // }


      [HttpPut("feedback")]
        public async Task<IActionResult> UpdateFeedback([FromBody] UpdateFeedbackRequest model)
        {
            var updated = await _complaintService.UpdateFeedback(model);

            if (!updated)
                return NotFound(new { message = "Complaint not found." });

            return Ok(new { updated = updated, message = "Feedback added successfully." });
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, UpdateComplaintRequest model)
        {
            _complaintService.Update(id, model);
            return Ok(new { message = "Complaint updated successfully" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _complaintService.Delete(id);
            return Ok(new { message = "Complaint deleted successfully" });
        }

          // ✅ 1. Update Complaint Status
        [HttpPut("{id}/status")]
        public IActionResult UpdateStatus(int id, [FromBody] StatusRequest request)
        {
            var complaint = _complaintService.GetById(id);;
            if (complaint == null)
                return NotFound("Complaint not found.");

            complaint.Status = request.Status;
            

            return Ok(new { message = "Status updated successfully." });
        }

        // ✅ 2. Update Feedback Message
        [HttpPut("{id}/feedback")]
        public IActionResult UpdateFeedbackOnly(int id, [FromBody] FeedbackRequest request)
        {
            var complaint = _complaintService.GetById(id);;
            if (complaint == null)
                return NotFound("Complaint not found.");
            // _complaintService.UpdateFeedback(complaint);
            complaint.FeedMsg = request.FeedMsg;
            
       
            return Ok(new {id=id ,complaint=complaint,message = "Feedback11 added successfully." });
        }
    }
    

    // ✅ Supporting Models
    public class StatusRequest
    {
        public string Status { get; set; }  // "Pending" | "In Progress" | "Resolved"
    }

    public class FeedbackRequest
    {
        public string FeedMsg { get; set; }
    }
    
}
