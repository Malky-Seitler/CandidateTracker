using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CandidateTracker.Data;
using Microsoft.EntityFrameworkCore;

namespace CandidateTracker.data
{
    public class CandidatesRepository
    {
        private readonly string _connectionString;
        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
       public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateDbContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public List<Status> GetStatuses()
        {
            using var context = new CandidateDbContext(_connectionString);
            var statuses = new List<Status>();
            foreach(Candidate c in context.Candidates)
            {
                statuses.Add(c.Status);
            }
            return statuses;
        }
        public List<Candidate> GetCandidateByStatus(Status status)
        {
            using var context = new CandidateDbContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void Update(Candidate candidate)
        {

            using var context = new CandidateDbContext(_connectionString);
            context.Candidates.Attach(candidate);
            context.Entry(candidate).State = EntityState.Modified;
            context.SaveChanges();
        }

    }
}
