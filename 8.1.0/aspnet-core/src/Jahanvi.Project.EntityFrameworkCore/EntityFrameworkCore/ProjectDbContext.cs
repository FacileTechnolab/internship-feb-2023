using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Jahanvi.Project.Authorization.Roles;
using Jahanvi.Project.Authorization.Users;
using Jahanvi.Project.MultiTenancy;

namespace Jahanvi.Project.EntityFrameworkCore
{
    public class ProjectDbContext : AbpZeroDbContext<Tenant, Role, User, ProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */

        public DbSet<Course> course { get; set; }        
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
            : base(options)
        {
        }
    }
}
