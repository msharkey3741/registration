using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Registration.Models.Response
{
    public abstract class BaseResponse
    {
        public bool IsSuccessful { get; set; }
    }
}
