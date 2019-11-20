using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Registration.Models;
using Registration.Models.Response;
using Registration.Services;

namespace Registration.Controllers
{

    [Route("api/customers")]
    [ApiController]
    public class UserApiController : Controller
    {
        int code = 0;
        BaseResponse response = null;
        UserService _service = new UserService();


        [HttpPost, AllowAnonymous]
        public ActionResult<int> Add(User model)
        {
            int id = 0;
            try
            {
                id = _service.Add(model);
                code = 200;
                response = new SuccessResponse();
            }
            catch (Exception ex)
            {
                code = 500;
                ex.Message.ToString();
                response = new ErrorResponse(ex.Message);

            }
            return StatusCode(code, response);
        }
        [HttpGet, AllowAnonymous]
        public ActionResult<ItemResponse<List<User>>> GetAll()
        {

            try
            {
                List<User> user = _service.GetAll();
                code = 200;
                response = new ItemResponse<List<User>> { Item = user };
            }
            catch (Exception ex)
            {
                code = 500;
                ex.Message.ToString();
                response = new ErrorResponse(ex.Message);
            }
            return StatusCode(code, response);
        }
        [HttpGet("{id}"), AllowAnonymous]
        public ActionResult<ItemResponse<User>> GetById(int id)
        {
            try
            {
                User user = _service.GetById(id);
                code = 200;
                response = new ItemResponse<User> { Item = user };
            }
            catch (Exception ex)
            {

                code = 500;
                ex.Message.ToString();
                response = new ErrorResponse(ex.Message);
            }
            return StatusCode(code, response);
        }
    }
}