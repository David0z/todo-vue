import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useSortTasks } from '../../composables/useSortTasks'
import { TaskStore } from '../../stores/Task'
import { nextTick, toRef } from 'vue'

describe('useSortTask composable', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('setSortedBy function should work properly', () => {
    const taskStore = TaskStore()
    const tasks = toRef(taskStore, 'tasks')
    const { sortedBy, setSortedBy } = useSortTasks(tasks)
    setSortedBy('min-date')
    expect(sortedBy.value).toBe('min-date')
  })

  it('should sort tasks successfully', async () => {
    const taskStore = TaskStore()
    const tasks = toRef(taskStore, 'tasks')
    const { setSortedBy, sortedTasks } = useSortTasks(tasks)

    setSortedBy('max-date')
    await nextTick()
    for (let i = 0; i < sortedTasks.value.length - 1; i++) {
      const date1 = Date.parse(sortedTasks.value[i].date)
      const date2 = Date.parse(sortedTasks.value[i + 1].date)
      expect(date1).toBeGreaterThanOrEqual(date2)
    }

    setSortedBy('min-date')
    await nextTick()
    for (let i = 0; i < sortedTasks.value.length - 1; i++) {
      const date1 = Date.parse(sortedTasks.value[i].date)
      const date2 = Date.parse(sortedTasks.value[i + 1].date)
      expect(date1).toBeLessThanOrEqual(date2)
    }
  })
})
