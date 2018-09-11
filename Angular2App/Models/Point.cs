using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Angular2App.Models
{
    public class Point
    {
        [Key]
        public int Id { get; set; }
        public string Lat { get; set; }
        public string Lng { get; set; }
        public string Author { get; set; }
        public string Date { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }
    }   
}