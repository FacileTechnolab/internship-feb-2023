using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Krishika.Project.Authorization.Roles;
using Krishika.Project.Authorization.Users;
using Krishika.Project.MultiTenancy;
using Krishika.Project.Project;

namespace Krishika.Project.EntityFrameworkCore
{
    public class ProjectDbContext : AbpZeroDbContext<Tenant, Role, User, ProjectDbContext>
    {   
        public DbContext<Projects> project { get; set; }
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
            : base(options)
        {

        }
    }
}
