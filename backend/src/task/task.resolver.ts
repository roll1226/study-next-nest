import { Task } from './task';
import { TaskService } from './task.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TaskResolver {
  constructor(private tasksService: TaskService) {}

  @Query(() => Task)
  async getTask(@Args({ name: 'taskId' }) taskId: number): Promise<Task> {
    return await this.tasksService.findOne(taskId);
  }
}
