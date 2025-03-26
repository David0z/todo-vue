<script setup lang="ts">
import type { Task } from '../../../types/task'
import Calendar from '../../../assets/date.svg'
import useDate from '../../../composables/useDate'

const props = defineProps<{ task: Task; isListInView1: boolean }>()

const dateFormated = useDate(props.task.date)
</script>
<template>
  <div :class="`flex flex-col flex-1 ${isListInView1 ? 'mr-6' : ''}`">
    <div :class="`flex items-center justify-between ${isListInView1 ? 'mb-1' : 'mb-2'}`">
      <span className="block font-medium dark:text-slate-200">
        {{ props.task.title }}
      </span>
    </div>
    <p
      :title="props.task.description"
      :class="`description mb-2 text-slate-500 dark:text-slate-500 ${
        isListInView1 ? 'line-clamp-2 sm:line-clamp-1' : 'line-clamp-3'
      }`"
    >
      {{ props.task.description }}
    </p>
    <time class="mt-auto flex w-full">
      <Calendar class="mr-2 w-4 sm:w-5" /> {{ dateFormated }}
    </time>
  </div>
</template>
