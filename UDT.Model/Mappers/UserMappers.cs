using System;
using System.Collections.Generic;
using System.Text;
using UDT.Model.Entities;
using UDT.Model.ViewModels;

namespace UDT.Model.Mappers
{
    public static class UserMappers
    {

        public static User toEntity(this UserViewModel userViewModel)
        {
            User user = new User
            {
                Id = userViewModel.Id,
                Name = userViewModel.Name,
                GroupId = userViewModel.GroupId,
                Email = userViewModel.Email,
                Role = userViewModel.Role,
                Code = userViewModel.Code,
            };

            return user;
        }

        public static UserViewModel toViewModel(this User user)
        {
            UserViewModel userViewModel = new UserViewModel
            {
                Id = user.Id,
                Name = user.Name,
                GroupId = user.GroupId,
                Email = user.Email,
                Role = user.Role,
                Code = user.Code,
            };

            return userViewModel;
        }

        public static User toEntity(this UserUpdateViewModel userUpdateViewModel)
        {
            User user = new User
            {
                Name = userUpdateViewModel.Name,
                GroupId = userUpdateViewModel.GroupId,
                Email = userUpdateViewModel.Email,
                Role = userUpdateViewModel.Role,
                Code = userUpdateViewModel.Code,
            };

            return user;
        }

        public static User toEntity(this UserCreationViewModel userCreationViewModel)
        {
            User user = new User
            {
                Name = userCreationViewModel.Name,
                GroupId = userCreationViewModel.GroupId,
                Email = userCreationViewModel.Email,
                Role = userCreationViewModel.Role,
                Code = userCreationViewModel.Code,
            };

            return user;
        }

    }
}
