using CuboNetworkChallenge.Domain;
using Microsoft.EntityFrameworkCore;

namespace CuboNetworkChallenge.DbContextConfiguration
{
    public class EmployeeDb : DbContext
    {
        public EmployeeDb(DbContextOptions<EmployeeDb> options) : base(options)
        {
        }

        public DbSet<Employee> Employees => Set<Employee>();   
    }
}
