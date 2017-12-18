using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mls_backend
{
    public class MLSContext : DbContext
    {
        public MLSContext(DbContextOptions<MLSContext> options) : base(options)
        {

        }

        public DbSet<Models.Estate> Estate { get; set; }
    }
}
