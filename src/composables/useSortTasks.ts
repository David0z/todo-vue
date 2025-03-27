import type { Task } from '@/types/task'
import { ref, watch, type Ref } from 'vue'

export function useSortTasks(tasks: Ref<Task[]>) {
  const sortedBy = ref<string>('')
  function setSortedBy(value: string) {
    sortedBy.value = value
  }
  const sortedTasks = ref<Task[]>([])

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

  watch(
    [sortedBy, tasks],
    () => {
      if (sortedBy.value === 'min-date' || sortedBy.value === 'max-date') {
        sortedTasks.value = sortByDate(sortedBy.value)
      }
      if (sortedBy.value === '') {
        sortedTasks.value = tasks.value
      }
    },
    { immediate: true, deep: true },
  )

  return { sortedBy, setSortedBy, sortedTasks }
}
