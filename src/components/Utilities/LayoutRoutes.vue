<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { Task } from '../../types/task'
import { ModalStore } from '../../stores/Modal'
import { useSortTasks } from '../../composables/useSortTasks'
import ButtonsSort from '../TasksSection/ButtonsSort.vue'
import TaskItem from '../TasksSection/TaskItem/TaskItem.vue'

const props = defineProps<{
  title: string
  tasks: Task[]
}>()

const modalStore = ModalStore()
const isListInView1 = ref<boolean>(false)
const setIsListInView1 = (status: boolean) => {
  isListInView1.value = status
}

const { sortedBy, setSortedBy, sortedTasks } = useSortTasks(props.tasks)

const tasksTitle = `${props.title} (${props.tasks.length} ${props.tasks.length === 1 ? 'task' : 'tasks'})`
</script>
<template>
  <section>
    <h1
      className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200"
    >
      {{ tasksTitle }}
    </h1>
    <ButtonsSort
      :isListInView1="isListInView1"
      :setIsListInView1="setIsListInView1"
      :sortedBy="sortedBy"
      :setSortedBy="setSortedBy"
    />
    <ul
      :class="`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
        isListInView1
          ? 'grid-cols-1'
          : '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end'
      }`"
    >
      <TaskItem
        v-for="task in sortedTasks"
        :key="task.id"
        :isListInView1="isListInView1"
        :task="task"
      />
      <li>
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
          Add new task
        </button>
      </li>
    </ul>
  </section>
</template>
