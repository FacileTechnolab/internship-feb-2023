using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace FirstprojectShivi.EntityFrameworkCore
{
    public static class FirstprojectShiviDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<FirstprojectShiviDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<FirstprojectShiviDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
