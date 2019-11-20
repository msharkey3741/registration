using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Registration.Models.Response
{
    public interface IItemResponse
    {
        bool IsSuccessful { get; set; }

        object Item { get; }
    }
}
