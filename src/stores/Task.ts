import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '../types/task'

const defaultTasks: Task[] = [
  {
    title: 'Zadanie 1',
    description: 'Opis zadania 1',
    date: '2025-03-24',
    completed: true,
    id: 't1',
  },
  {
    title: 'Zadanie 2',
    description: 'Opis zadania 2',
    date: '2025-03-25',
    completed: false,
    id: 't2',
  },
  {
    title: 'Zadanie 3',
    description: 'Opis zadania 3',
    date: '2025-03-26',
    completed: true,
    id: 't3',
  },
  {
    title: 'Zadanie 4',
    description: 'Opis zadania 4',
    date: '2025-03-27',
    completed: false,
    id: 't4',
  },
  {
    title: 'Zadanie 5',
    description: 'Opis zadania 5',
    date: '2025-03-28',
    completed: true,
    id: 't5',
  },
  {
    title: 'Zadanie 6',
    description: 'Opis zadania 6',
    date: '2025-03-29',
    completed: false,
    id: 't6',
  },
  {
    title: 'Zadanie 7',
    description: 'Opis zadania 7',
    date: '2025-03-30',
    completed: true,
    id: 't7',
  },
  {
    title: 'Zadanie 8',
    description: 'Opis zadania 8',
    date: '2025-03-31',
    completed: false,
    id: 't8',
  },
  {
    title: 'Zadanie 9',
    description: 'Opis zadania 9',
    date: '2025-04-01',
    completed: true,
    id: 't9',
  },
  {
    title: 'Zadanie 10',
    description: 'Opis zadania 10',
    date: '2025-04-02',
    completed: false,
    id: 't10',
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

  watch(
    tasks,
    () => {
      localStorage.setItem('tasks', JSON.stringify(tasks.value))
    },
    { deep: true },
  )

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
