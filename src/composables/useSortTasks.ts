import type { Task } from '@/types/task'
import { ref, watch, type Ref } from 'vue'

export function useSortTasks(tasks: Ref<Task[]>) {
  const sortedBy = ref<string>('')
  function setSortedBy(value: string) {
    sortedBy.value = value
  }
  const sortedTasks = ref<Task[]>([])
  function setSortedTasks(value: Task[]) {
    sortedTasks.value = value
  }

  function sortByDate(order: 'max-date' | 'min-date'): Task[] {
    const toMillisseconds = (date: string) => Date.parse(date)
    const tasksCopy = [...tasks.value]
    const sorted = tasksCopy.sort((task1, task2) => {
      const date1 = toMillisseconds(task1.date)
      const date2 = toMillisseconds(task2.date)

      if (date1 < date2) {
        return -1
      }

      if (date1 > date2) {
        return 1
      }

      return 0
    })

    if (order === 'min-date') {
      return sorted
    }

    if (order === 'max-date') {
      return sorted.reverse()
    }

    return tasks.value
  }

  function sortByCompletedStatus(completed: boolean): Task[] {
    const tasksCopy = [...tasks.value]
    const sorted = tasksCopy.sort((task1) => {
      if (task1.completed) {
        return -1
      }
      return 0
    })
    if (completed) {
      return sorted
    }
    if (!completed) {
      return sorted.reverse()
    }
    return tasks.value
  }

  watch(
    [sortedBy, tasks],
    () => {
      if (sortedBy.value === 'min-date' || sortedBy.value === 'max-date') {
        setSortedTasks(sortByDate(sortedBy.value))
      }
      if (sortedBy.value === '' || sortedBy.value === 'order-added') {
        setSortedTasks(tasks.value)
      }
      if (sortedBy.value === 'completed-first') {
        setSortedTasks(sortByCompletedStatus(true))
      }
      if (sortedBy.value === 'uncompleted-first') {
        setSortedTasks(sortByCompletedStatus(false))
      }
    },
    { immediate: true, deep: true },
  )

  return { sortedBy, setSortedBy, sortedTasks }
}
