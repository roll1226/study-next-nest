import { Task } from './task';
import { TasksService } from './tasks.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => Task)
  async getTask(@Args({ name: 'taskId' }) taskId: number): Promise<Task> {
    return await this.tasksService.findOne(taskId);
  }
}
