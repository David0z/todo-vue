import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import useSearchQuery from '../../composables/useSearchQuery'
import { TaskStore } from '../../stores/Task'
import { ref } from 'vue'
import { newTask } from '../helpers'

describe('useSearchQuery composable', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('setFilteredBy function should work properly', () => {
    const taskStore = TaskStore()
    taskStore.addNewTask(newTask)
    const searchQuery = ref('test')

    const matchedResults = useSearchQuery(searchQuery)

    for (const task of matchedResults.value) {
      expect(
        [task.title.toLowerCase(), task.description.toLowerCase()].some((v) =>
          new RegExp(searchQuery.value.toLowerCase()).test(v),
        ),
      ).toBe(true)
    }
  })
})
