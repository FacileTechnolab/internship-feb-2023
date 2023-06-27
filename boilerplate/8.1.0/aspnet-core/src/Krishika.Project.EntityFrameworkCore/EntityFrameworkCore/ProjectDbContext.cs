using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Krishika.Project.Authorization.Roles;
using Krishika.Project.Authorization.Users;
using Krishika.Project.MultiTenancy;

namespace Krishika.Project.EntityFrameworkCore
{
    public class ProjectDbContext : AbpZeroDbContext<Tenant, Role, User, ProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
            : base(options)
        {
        }
    }
}
