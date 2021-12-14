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
                SubjectId = TaskViewModel.SubjectId,
                Deadline = TaskViewModel.Deadline,
                Penalty = TaskViewModel.Penalty,
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
                SubjectId = Task.SubjectId,
                Deadline = Task.Deadline,
                Penalty = Task.Penalty,
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
                SubjectId = TaskUpdateViewModel.SubjectId,
                Deadline = TaskUpdateViewModel.Deadline,
                Penalty = TaskUpdateViewModel.Penalty,
            };

            return Task;
        }

        public static Task toEntity(this TaskCreationViewModel TaskCreationViewModel)
        {
            Task Task = new Task
            {
                Title = TaskCreationViewModel.Title,
                Description = TaskCreationViewModel.Description,
                SubjectId = TaskCreationViewModel.SubjectId,
                Deadline = TaskCreationViewModel.Deadline,
                Penalty = TaskCreationViewModel.Penalty,
            };

            return Task;
        }

    }
}