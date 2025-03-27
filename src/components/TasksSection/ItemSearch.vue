<script setup lang="ts">
import useDate from '@/composables/useDate'
import type { Task } from '@/types/task'
import { RouterLink } from 'vue-router'

const props = defineProps<{ task: Task }>()
const dateFormated = useDate(props.task.date)
</script>
<template>
  <li :key="props.task.id" class="py-2">
    <RouterLink
      :to="`/task/${props.task.id}`"
      class="flex justify-between transition hover:text-rose-500 dark:hover:text-slate-200"
    >
      <span>{{ props.task.title }}</span>
      <span>{{ dateFormated }}</span>
    </RouterLink>
  </li>
</template>
