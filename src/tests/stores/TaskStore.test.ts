import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { TaskStore } from '../../stores/Task'
import type { Task } from '@/types/task'

const newTask: Task = {
  title: 'Test Task',
  description: 'Test description',
  date: new Date().toISOString().split('T')[0],
  completed: false,
  id: 'test-task-id',
}

describe('taskStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should create a task', () => {
    const taskStore = TaskStore()
    taskStore.addNewTask(newTask)
    expect(taskStore.tasks.length).toBe(11)
    const firstTask = taskStore.tasks[0]
    for (const key in newTask) {
      expect(firstTask[key as keyof Task]).toBe(newTask[key as keyof Task])
    }
  })

  // it('should update a task', () => {
  //   const taskStore = TaskStore()
  //   taskStore.addNewTask('Old Task')
  //   const taskId = taskStore.tasks[0].id
  //   taskStore.editTask(taskId, 'Updated Task')
  //   const updatedTask = taskStore.tasks.find(task => task.id === taskId)
  //   expect(updatedTask?.title).toBe('Updated Task')
  // })

  // it('should delete a task', () => {
  //   const taskStore = TaskStore()
  //   taskStore.addNewTask('Task to delete')
  //   const taskId = taskStore.tasks[0].id
  //   taskStore.removeTask(taskId)
  //   expect(taskStore.tasks.length).toBe(0)
  // })
})
