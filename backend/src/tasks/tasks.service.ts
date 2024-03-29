import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOne({
      where: { id },
      relations: ['customer'],
    });
  }
}
