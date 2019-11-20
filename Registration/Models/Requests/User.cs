using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Registration.Models
{
 
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Must Include Email")]
        [EmailAddress(ErrorMessage = "Must Be An Email Address")]
        [StringLength(50, MinimumLength = 6, ErrorMessage = "Must be a minimum length of 6 and a max of 50")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Must Include Name")]
        [StringLength(50, ErrorMessage = "Must be a max length of 30")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Must Include Gender")]
        public string Gender { get; set; }

        [Required(ErrorMessage = "Must Include Date Registered")]
        public string DateRegistered { get; set; }

        public bool Day1 { get; set; }
        public bool Day2 { get; set; }
        public bool Day3 { get; set; }

        public string AdditionalRequest { get; set; }
    }
}
