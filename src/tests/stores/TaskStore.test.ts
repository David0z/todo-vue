import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { TaskStore } from '../../stores/Task'
import type { Task } from '@/types/task'
import { newTask } from '../helpers'

describe('taskStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    const taskStore = TaskStore()
    taskStore.removeTask(newTask.id)
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

  it('should update a task', () => {
    const taskStore = TaskStore()
    taskStore.addNewTask(newTask)
    const taskId = taskStore.tasks[0].id
    const newTitle = 'Updated Task'
    taskStore.editTask({ ...newTask, title: newTitle })
    const updatedTask = taskStore.tasks.find((task) => task.id === taskId)
    expect(updatedTask?.title).toBe(newTitle)
  })

  it('should delete a task', () => {
    const taskStore = TaskStore()
    taskStore.addNewTask(newTask)
    expect(taskStore.tasks.length).toBe(11)
    const taskId = taskStore.tasks[0].id
    taskStore.removeTask(taskId)
    expect(taskStore.tasks.length).toBe(10)
  })
})
