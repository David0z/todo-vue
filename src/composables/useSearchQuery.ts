import { TaskStore } from '@/stores/Task'
import type { Task } from '@/types/task'
import { ref, watch, type Ref } from 'vue'

export default function useSearchQuery(searchQuery: Ref<string>) {
  const taskStore = TaskStore()
  const { tasks } = taskStore

  const matchedTasks = ref<Task[]>([])

  watch(
    [searchQuery, () => tasks],
    () => {
      const filteredTasks = tasks.filter((task: Task) => {
        return (
          task.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      })
      if (searchQuery.value.trim().length) {
        matchedTasks.value = filteredTasks
      } else {
        matchedTasks.value = []
      }
    },
    { immediate: true },
  )

  return matchedTasks
}
