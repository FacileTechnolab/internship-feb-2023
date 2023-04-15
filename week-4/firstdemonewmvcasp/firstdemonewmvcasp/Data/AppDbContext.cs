using firstdemonewmvcasp.Models;
using System.Data.Entity;

namespace firstdemonewmvcasp
{
    public class firstdemonewmvcaspContext : DbContext
    {
        public firstdemonewmvcaspContext()
        {
        }

        //public DbSet<Course> Courses { get; set; }
        //public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<MemberShipType> MemberShipTypes { get; set; }
    }
}