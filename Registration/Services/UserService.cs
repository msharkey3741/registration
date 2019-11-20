using Registration.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Registration.Services
{
    public class UserService
    {

        public List<User> GetAll()
        {
            using UserContext context = new UserContext();

            var users = context.Users;
            var allUsers = users.ToList();
                return allUsers;
        }
        public int Add(User model)
        {
            User bob = new User()
            {
                Email = model.Email,
                Name = model.Name,
                Gender = model.Gender,
                DateRegistered = model.DateRegistered,
                Day1= model.Day1,
                Day2= model.Day2,
                Day3= model.Day3,
                AdditionalRequest = model.AdditionalRequest
            };
            using UserContext context = new UserContext();

            context.Add(bob);
            context.SaveChanges();
            return bob.Id;
        }
        public User GetById(int Id)
        {
            using UserContext context = new UserContext();
            User user = context.Users.FirstOrDefault(u => u.Id == Id);
            return user;
        
        }
    }
}
