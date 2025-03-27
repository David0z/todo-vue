import type { Task } from '@/types/task'
import { ref, watch, type Ref } from 'vue'

export function useFilterTasks(tasks: Ref<Task[]>) {
  const filteredBy = ref<string>('')
  function setFilteredBy(value: string) {
    filteredBy.value = value
  }
  const filteredTasks = ref<Task[]>([])

  function filterByStatus(filter: 'completed' | 'uncompleted'): Task[] {
    return tasks.value.filter((task) => {
      if (filter === 'completed') {
        return task.completed
      }
      if (filter === 'uncompleted') {
        return !task.completed
      }
      return tasks
    })
  }

  watch(
    [filteredBy, tasks],
    () => {
      if (filteredBy.value === 'completed' || filteredBy.value === 'uncompleted') {
        filteredTasks.value = filterByStatus(filteredBy.value)
      }
      if (filteredBy.value === '') {
        filteredTasks.value = tasks.value
      }
    },
    { immediate: true, deep: true },
  )

  return { filteredBy, setFilteredBy, filteredTasks }
}
