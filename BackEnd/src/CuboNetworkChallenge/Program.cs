using CuboNetworkChallenge.DbContextConfiguration;
using CuboNetworkChallenge.Domain;
using CuboNetworkChallenge.Dto;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<EmployeeDb>(opt => opt.UseInMemoryDatabase("EmployeeList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/employee", async (EmployeeDb db) => await db.Employees.ToListAsync());

app.MapPost("/employee", async (EmployeeDto employee, EmployeeDb db) =>
{
});



app.Run();

public partial class Program { }