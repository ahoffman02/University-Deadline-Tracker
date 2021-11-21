using System;
using System.Collections.Generic;
using System.Text;
using UDT.Model.Entities;
using UDT.Model.ViewModels;

namespace UDT.Model.Mappers
{
    public static class TaskMappers
    {

        public static Task toEntity(this TaskViewModel TaskViewModel)
        {
            Task Task = new Task
            {
                Id = TaskViewModel.Id,
                Title = TaskViewModel.Title,
                Description = TaskViewModel.Description,
                Subject = TaskViewModel.Subject,
                GroupName = TaskViewModel.GroupName,
                Deadline = TaskViewModel.Deadline,
            };

            return Task;
        }

        public static TaskViewModel toViewModel(this Task Task)
        {
            TaskViewModel TaskViewModel = new TaskViewModel
            {
                Id = Task.Id,
                Title = Task.Title,
                Description = Task.Description,
                Subject = Task.Subject,
                GroupName = Task.GroupName,
                Deadline = Task.Deadline,
            };

            return TaskViewModel;
        }

        public static Task toEntity(this TaskUpdateViewModel TaskUpdateViewModel)
        {
            Task Task = new Task
            {
                Id = TaskUpdateViewModel.Id,
                Title = TaskUpdateViewModel.Title,
                Description = TaskUpdateViewModel.Description,
                Subject = TaskUpdateViewModel.Subject,
                GroupName = TaskUpdateViewModel.GroupName,
                Deadline = TaskUpdateViewModel.Deadline,
            };

            return Task;
        }

        public static Task toEntity(this TaskCreationViewModel TaskCreationViewModel)
        {
            Task Task = new Task
            {
                Title = TaskCreationViewModel.Title,
                Description = TaskCreationViewModel.Description,
                Subject = TaskCreationViewModel.Subject,
                GroupName = TaskCreationViewModel.GroupName,
                Deadline = TaskCreationViewModel.Deadline,
            };

            return Task;
        }

    }
}