using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Angular2App.Models
{
    public class DataContext : DbContext
    {
        public DataContext()
            :base("DataConnection")
            {
    } 

    public DbSet<Point> Points { get; set; }
    public DbSet<User> Users { get; set; }
    }
}