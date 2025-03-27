import type { Task } from '@/types/task'
import { ref, watch, type Ref } from 'vue'

export type Filter = 'completed' | 'uncompleted' | ''

export function useFilterTasks(tasks: Ref<Task[]>) {
  const filteredBy = ref<Filter>('')
  function setFilteredBy(value: Filter) {
    filteredBy.value = value
  }
  const filteredTasks = ref<Task[]>([])

  function filterByStatus(filter: Filter): Task[] {
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
