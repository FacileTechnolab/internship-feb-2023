using AspnetCore2.Data;
using AspnetCore2.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using System.Data.Sql;
//using System.Data.Entity;

namespace AspnetCore2.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options)
			: base(options)
		{

		}
		public DbSet<Restaurant> Restaurants { get; set; }
 	}
}
public class BloggingContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
	public AppDbContext CreateDbContext(string[] args)
	{
		var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
		optionsBuilder.UseSqlServer("Data Source= DESKTOP-MD32B8U\\SQLEXPRESS;Initial Catalog=AspnetCore2;Integrated Security=True;TrustServerCertificate=True;");

		return new AppDbContext(optionsBuilder.Options);
	}
}