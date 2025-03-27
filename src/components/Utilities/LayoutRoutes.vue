<script setup lang="ts">
import { ref, defineProps, computed, toRef } from 'vue'
import { ModalStore } from '@/stores/Modal'
import { useSortTasks } from '@/composables/useSortTasks'
import ButtonsSort from '../TasksSection/ButtonsSort.vue'
import TaskItem from '../TasksSection/TaskItem/TaskItem.vue'
import type { Task } from '@/types/task'
import { useFilterTasks } from '@/composables/useFilterTasks'
import { inflectTask } from '@/util/number'

const props = defineProps<{
  title: string
  tasks: Task[]
}>()

const tasksRef = toRef(props, 'tasks')

const modalStore = ModalStore()

const isListInView1 = ref<boolean>(false)
const setIsListInView1 = (status: boolean) => {
  isListInView1.value = status
}

const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(tasksRef)
const { filteredBy, setFilteredBy, filteredTasks } = useFilterTasks(sortedTasks)

const tasksTitle = computed(() => {
  return `${props.title} (${inflectTask(filteredTasks.value.length)})`
})
</script>
<template>
  <section>
    <h1
      class="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200"
    >
      {{ tasksTitle }}
    </h1>
    <ButtonsSort
      :isListInView1="isListInView1"
      :setIsListInView1="setIsListInView1"
      :sortedBy="sortedBy"
      :setSortedBy="setSortedBy"
      :filteredBy="filteredBy"
      :setFilteredBy="setFilteredBy"
    />
    <TransitionGroup
      name="list"
      tag="ul"
      :class="`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
        isListInView1
          ? 'grid-cols-1'
          : '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end'
      }`"
    >
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :isListInView1="isListInView1"
        :task="task"
      />
      <li key="addNewTask">
        <button
          @click="modalStore.openModalCreateTask"
          :class="`border-2 border-slate-300
             text-slate-400 w-full rounded-lg
              border-dashed transition hover:bg-slate-300
               hover:text-slate-500
               dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
                 isListInView1 ? 'h-20 sm:h-32' : 'h-52 sm:h-64'
               }`"
        >
          Dodaj nowe zadanie
        </button>
      </li>
    </TransitionGroup>
  </section>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0%);
}
</style>
