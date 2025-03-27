import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '../types/task'

const defaultTasks: Task[] = [
  {
    title: 'Task 1',
    description: 'This is the description for this task',
    date: '2023-04-12',
    completed: true,
    id: 't1',
  },
  {
    title: 'Task 2',
    description: 'This is the description for this task',
    date: '2023-05-15',
    completed: true,
    id: 't2',
  },
  {
    title: 'Task 3',
    description: 'This is the description for this task',
    date: '2023-08-21',
    completed: false,
    id: 't3',
  },
]

export const TaskStore = defineStore('Task', () => {
  const tasks = ref<Task[]>(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : defaultTasks,
  )

  function addNewTask(newTask: Task) {
    tasks.value = [newTask, ...tasks.value]
  }

  function removeTask(taskId: string) {
    const newTasksList = tasks.value.filter((task) => task.id !== taskId)
    tasks.value = newTasksList
  }

  function editTask(newTask: Task) {
    const newTaskEdited: Task = tasks.value.find((task: Task) => task.id === newTask.id)!
    const indexTask = tasks.value.indexOf(newTaskEdited)
    tasks.value[indexTask] = newTask
  }

  function toggleTaskCompleted(taskId: string) {
    const currTask = tasks.value.find((task) => task.id === taskId)!

    currTask.completed = !currTask.completed
  }

  function deleteAllData() {
    tasks.value = []
  }

  function getTaskById(taskId: string): Task {
    return tasks.value.find((task) => task.id === taskId)!
  }

  return {
    tasks,
    addNewTask,
    removeTask,
    editTask,
    toggleTaskCompleted,
    deleteAllData,
    getTaskById,
  }
})
