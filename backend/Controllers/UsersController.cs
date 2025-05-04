
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;
using WebApi.Models.Users;
using WebApi.Services;


namespace WebApi.Controllers;
[ApiController]
[Route("api/v1/[controller]")]
public class UsersController : ControllerBase
{
    private IUserService _userService;
    private IMapper _mapper;

    public UsersController(
        IUserService userService,
        IMapper mapper)
    {
        _userService = userService;
        _mapper = mapper;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userService.GetAll();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var user = _userService.GetById(id);
        return Ok(user);
    }

    [HttpPost]
    public IActionResult Create(CreateRequest model)
    {
        _userService.Create(model);
        return Ok(new { message = "User created" });
    }

    // public void Create(CreateRequest model)
    // {
    //     var user = new User
    //     {
    //         FirstName = model.FirstName,
    //         LastName = model.LastName,
    //         Username = model.Email.Split('@')[0],  // or anything meaningful
    //         Password = "default@123",              // hash it later in prod
    //         EnrollmentDate = DateTime.Now
    //     };

    //     DbContext.Users.Add(user);
    //     _context.SaveChanges(); // this is where the exception is thrown
    // }

    [HttpPut("{id}")]
    public IActionResult Update(int id, UpdateRequest model)
    {
        _userService.Update(id, model);
        return Ok(new { message = "User updated" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _userService.Delete(id);
        return Ok(new { message = "User deleted" });
    }
}