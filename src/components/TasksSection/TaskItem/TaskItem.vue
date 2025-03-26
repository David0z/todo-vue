<script setup lang="ts">
import type { Task } from '../../../types/task'
import InfosTask from './InfosTask.vue'
import ActionsTaskItem from './ActionsTaskItem.vue'

const props = defineProps<{ isListInView1: boolean; task: Task }>()
</script>
<template>
  <li :key="props.task.id">
    <article
      :class="`bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent ${
        isListInView1 ? 'flex-row sm:h-32' : 'flex-col h-52 sm:h-64'
      }`"
    >
      <InfosTask :task="props.task" :isListInView1="props.isListInView1" />
      <ActionsTaskItem :task="props.task" :isListInView1="props.isListInView1" />
    </article>
  </li>
</template>
