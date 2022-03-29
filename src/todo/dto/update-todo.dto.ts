import { BaseTodoDto } from './base.dto';

export class UpdateTodoDto extends BaseTodoDto {
  completedAt: Date;
}
