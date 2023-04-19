using AuthonticationMvc.Models;
using System.Data.Entity;

namespace AuthonticationMvc
{
    public class AuthonticationMvcContext : DbContext
    {
        public AuthonticationMvcContext()
        {
        }

        //public DbSet<Course> Courses { get; set; }
        //public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Customer> Customers { get; set; }
        //public DbSet<MemberShipType> MemberShipTypes { get; set; }
    }
}