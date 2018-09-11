using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Angular2App.Models
{
    public class User
    {
        [Key]
        public string Login { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int PointsSet { get; set; }
    }   
}