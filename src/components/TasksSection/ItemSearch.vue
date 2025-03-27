<script setup lang="ts">
import formatedDate from '@/composables/useDate'
import type { Task } from '@/types/task'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{ task: Task }>()
const dateFormated = computed(() => formatedDate(props.task.date))
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
