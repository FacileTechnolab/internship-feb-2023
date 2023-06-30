using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Krishika.Project.Authorization.Roles;
using Krishika.Project.Authorization.Users;
using Krishika.Project.MultiTenancy;
using Krishika.Project.Modal;

namespace Krishika.Project.EntityFrameworkCore
{
    public class ProjectDbContext : AbpZeroDbContext<Tenant, Role, User, ProjectDbContext>
    {
         public DbSet<Projects> Project { get; set; }
        public DbSet<ProjectResource> ProjectResources { get; set; }

        public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
            : base(options)
        {
        }
    }
}
