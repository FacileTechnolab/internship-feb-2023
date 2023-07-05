using System;
using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using FirstprojectShivi.Authorization.Roles;
using FirstprojectShivi.Authorization.Users;
using FirstprojectShivi.MultiTenancy;
using FirstprojectShivi.Models;

namespace FirstprojectShivi.EntityFrameworkCore
{
    public class FirstprojectShiviDbContext : AbpZeroDbContext<Tenant, Role, User, FirstprojectShiviDbContext>
    {
		/* Define a DbSet for each entity of the application */
		public DbSet<Restaurant> Restaurants { get; set; }
     public DbSet<Order> Orders { get; set; }

        public FirstprojectShiviDbContext(DbContextOptions<FirstprojectShiviDbContext> options)
            : base(options)
        {
        }
    }
}
