
using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CandidateTracker.Data
{
    public class CandidatesDbContextFactory : IDesignTimeDbContextFactory<CandidateDbContext>
    {
        public CandidateDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CandidateTracker.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateDbContext(config.GetConnectionString("ConStr"));
        }
    }
}