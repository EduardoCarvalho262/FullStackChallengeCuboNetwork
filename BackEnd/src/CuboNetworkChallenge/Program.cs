using CuboNetworkChallenge.DbContextConfiguration;
using CuboNetworkChallenge.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<EmployeeDb>(opt => opt.UseInMemoryDatabase("EmployeeList"));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(builder => builder
.AllowAnyOrigin()
.AllowAnyMethod()
.AllowAnyHeader());

app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => "Hello World!");
app.MapGet("/employee", async (EmployeeDb employee) => await employee.Employees.ToListAsync());
app.MapPost("/employee", async (Employee employee, EmployeeDb employeeDb) =>
{
    employeeDb.Employees.Add(employee);
    await employeeDb.SaveChangesAsync();

    return Results.Created($"/employee/{employee.Id}", employee);
});


app.Run();

public partial class Program { }