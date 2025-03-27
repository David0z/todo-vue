<script setup lang="ts">
import ItemSearch from './ItemSearch.vue'
import Search from '../../assets/search.svg'
import useSearchQuery from '@/composables/useSearchQuery'
import useVisibility from '@/composables/useVisibility'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchResultsRef = ref<HTMLInputElement>()
const searchInputValue = ref<string>('')
function setSearchInputValue(value: string) {
  searchInputValue.value = value
}

const matchedTasks = useSearchQuery(searchInputValue)
const tasks = computed(() => matchedTasks.value.slice(0, 4))

const {
  elementIsVisible: listResultsVisible,
  showElement: showListResults,
  closeElement: closeListResults,
} = useVisibility([searchResultsRef], () => setSearchInputValue(''))

function navigateToSearchResults() {
  if (listResultsVisible.value) {
    router.push({
      name: 'search',
      query: {
        q: searchInputValue.value,
      },
    })
  }
}

watch(searchInputValue, () => {
  if (searchInputValue.value.trim().length > 0) {
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
        placeholder="Search task"
        ref="searchResultsRef"
        @keyup="
          ({ currentTarget }) => {
            // @TODO DEBOUNCE
            setSearchInputValue((currentTarget as HTMLInputElement).value)
          }
        "
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
            All results for "{{ searchInputValue }}"
          </button>
        </template>
        <template v-else>
          <span>No tasks found</span>
        </template>
      </div>
    </form>
  </div>
</template>
