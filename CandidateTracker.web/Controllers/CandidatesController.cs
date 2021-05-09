using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CandidateTracker.data;
using Microsoft.Extensions.Configuration;

namespace CandidateTracker.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("AddCandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.AddCandidate(candidate);

        }
        [HttpGet]
        [Route("GetStatuses")]
        public CountsViewModel GetStatuses()
        {
            var repo = new CandidatesRepository(_connectionString);
            var statuses = repo.GetStatuses();
            var vm = new CountsViewModel();
            foreach (Status status in statuses)
            {
                if (status == Status.pending)
                {
                    vm.PendingCount++;
                }
                else if (status == Status.refused)
                {
                    vm.RefusedCount++;
                }
                else if (status == Status.confirmed)
                {
                    vm.ConfirmedCount++;
                }
            }
            return vm;
        }

        [HttpGet]
        [Route("GetPending")]
        public List<Candidate> GetPending()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidateByStatus(Status.pending);
        }
        [HttpGet]
        [Route("GetRefused")]
        public List<Candidate> GetRefused()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidateByStatus(Status.refused);
        }
        [HttpGet]
        [Route("GetConfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidateByStatus(Status.confirmed);
        }
        [HttpGet]
        [Route("GetById")]
        public Candidate GetById(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost]
        [Route("UpdateCandidate")]
        public void UpdateCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.Update(candidate);

        }
    }
    public class CountsViewModel
    {
        public int PendingCount { get; set; }
        public int RefusedCount { get; set; }
        public int ConfirmedCount { get; set; }
    }

}
