using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace FirstCrudPoject.EntityFrameworkCore
{
    public static class FirstCrudPojectDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<FirstCrudPojectDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<FirstCrudPojectDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
