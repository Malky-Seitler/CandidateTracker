﻿using Microsoft.EntityFrameworkCore;
using CandidateTracker.data;

namespace CandidateTracker.Data
{
    public class CandidateDbContext : DbContext
    {
        private readonly string _connectionString;

        public CandidateDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Candidate>()
                .Property(c => c.Status)
                .HasConversion<int>();
        }

        public DbSet<Candidate> Candidates { get; set; }
    }
}