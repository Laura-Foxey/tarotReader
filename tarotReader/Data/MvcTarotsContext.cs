using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

    public class MvcTarotsContext : DbContext
    {
        public MvcTarotsContext (DbContextOptions<MvcTarotsContext> options)
            : base(options)
        {
        }

        public DbSet<Tarots>? Tarots { get; set; }
    }
