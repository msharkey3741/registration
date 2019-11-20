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
            context.Database.EnsureCreated();
            User bob = new User()
            {
                Email = "email@email.com",
                Name = "bob",
                Gender = "male",
                DateRegistered = "11/02/2019",
                Day1 = true,
                Day2 = false,
                Day3 = true,
                AdditionalRequest = "Here is some additional information"
            };
            User stan = new User()
            {
                Email = "email@email.com",
                Name = "stan",
                Gender = "male",
                DateRegistered = "05/25/2019",
                Day1 = true,
                Day2 = true,
                Day3 = true,
                AdditionalRequest = "Stan is gonna need a lot of information on products"
            };
            User lisa = new User()
            {
                Email = "email@email.com",
                Name = "lisa",
                Gender = "female",
                DateRegistered = "09/15/2019",
                Day1 = true,
                Day2 = true,
                Day3 = false,
            };
            context.Add(bob);
            context.Add(stan);
            context.Add(lisa);
            context.SaveChanges();
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
            context.Database.EnsureCreated();
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
