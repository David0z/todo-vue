<script setup lang="ts">
import ItemSearch from './ItemSearch.vue'
import Search from '../../assets/search.svg'
import useSearchQuery from '@/composables/useSearchQuery'
import useVisibility from '@/composables/useVisibility'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { refDebounced } from '@vueuse/core'

const router = useRouter()

const searchResultsRef = ref<HTMLInputElement>()
const searchInputValue = ref<string>('')
const debounced = refDebounced(searchInputValue, 1000)

const matchedTasks = useSearchQuery(debounced)
const tasks = computed(() => matchedTasks.value.slice(0, 4))

const {
  elementIsVisible: listResultsVisible,
  showElement: showListResults,
  closeElement: closeListResults,
} = useVisibility([searchResultsRef], () => (searchInputValue.value = ''))

function navigateToSearchResults() {
  if (listResultsVisible.value) {
    router.push({
      name: 'search',
      query: {
        q: debounced.value,
      },
    })
  }
}

watch(debounced, () => {
  console.log('value updated')

  if (debounced.value.trim().length > 0) {
    showListResults()
  } else {
    closeListResults()
  }
})
</script>
<template>
  <div class="flex-1 col-span-3 row-start-2 md:pr-10">
    <form class="relative md:max-w-xs w-full" autoComplete="off">
      <label for="search" class="sr-only"></label>
      <input
        type="search"
        id="search"
        placeholder="Szukaj zadania"
        ref="searchResultsRef"
        v-model="searchInputValue"
        class="inputStyles w-full"
      />
      <Search class="absolute w-4 sm:w-5 right-4 top-3.5 text-slate-400" />
      <div
        v-if="listResultsVisible"
        class="absolute bg-slate-100 rounded-md w-full top-14 p-3 dark:bg-slate-800 z-10"
      >
        <template v-if="tasks.length">
          <ul>
            <ItemSearch v-for="task in tasks" :key="task.id" :task="task" />
          </ul>
          <button
            @click="navigateToSearchResults"
            class="bg-rose-100 w-full p-2 rounded-md text-rose-600 dark:bg-slate-700/[.3] dark:text-slate-200"
          >
            Wszystkie wyniki dla "{{ searchInputValue }}"
          </button>
        </template>
        <template v-else>
          <span>Brak znalezionych zadań</span>
        </template>
      </div>
    </form>
  </div>
</template>
