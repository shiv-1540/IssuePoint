namespace WebApi.Helpers;

using AutoMapper;
using WebApi.Entities;
using WebApi.Models.Users;
using WebApi.Models.Complaints; // <-- Add this for complaint models

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        // User mappings
        CreateMap<CreateRequest, User>();

        CreateMap<UpdateRequest, User>()
            .ForAllMembers(x => x.Condition(
                (src, dest, prop) =>
                {
                    if (prop == null) return false;
                    if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;
                    return true;
                }
            ));

        // Complaint mappings
        CreateMap<CreateComplaintRequest, Complaint>();
        CreateMap<UpdateFeedbackRequest,Complaint>();

        CreateMap<UpdateComplaintRequest, Complaint>()
            .ForAllMembers(x => x.Condition(
                (src, dest, prop) =>
                {
                    if (prop == null) return false;
                    if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;
                    return true;
                }
            ));
    }
}
