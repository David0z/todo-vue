import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useFilterTasks } from '../../composables/useFilterTasks'
import { TaskStore } from '../../stores/Task'
import { nextTick, toRef } from 'vue'

describe('useFilterTask composable', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('setFilteredBy function should work properly', () => {
    const taskStore = TaskStore()
    const tasks = toRef(taskStore, 'tasks')
    const { filteredBy, setFilteredBy } = useFilterTasks(tasks)
    setFilteredBy('completed')
    expect(filteredBy.value).toBe('completed')
  })

  it('should filter tasks successfully', async () => {
    const taskStore = TaskStore()
    const tasks = toRef(taskStore, 'tasks')
    const { setFilteredBy, filteredTasks } = useFilterTasks(tasks)

    setFilteredBy('completed')
    await nextTick()
    for (const task of filteredTasks.value) {
      expect(task.completed).toBe(true)
    }

    setFilteredBy('uncompleted')
    await nextTick()
    for (const task of filteredTasks.value) {
      expect(task.completed).toBe(false)
    }
  })
})
