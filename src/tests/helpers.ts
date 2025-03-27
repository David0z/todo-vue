import type { Task } from '@/types/task'

export const newTask: Task = {
  title: 'Test Task',
  description: 'Test description',
  date: new Date().toISOString().split('T')[0],
  completed: false,
  id: 'test-task-id',
}
