using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using FirstCrudPoject.Authorization.Roles;
using FirstCrudPoject.Authorization.Users;
using FirstCrudPoject.MultiTenancy;
using FirstCrudPoject.Models;

namespace FirstCrudPoject.EntityFrameworkCore
{
    public class FirstCrudPojectDbContext : AbpZeroDbContext<Tenant, Role, User, FirstCrudPojectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Event> Events { get; set; }
       public DbSet<Ticket> Tickets { get; set; }
        public FirstCrudPojectDbContext(DbContextOptions<FirstCrudPojectDbContext> options)
            : base(options)
        {
        }
    }
}
