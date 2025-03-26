<script setup lang="ts">
import type { Task } from '../../../types/task'
import BtnEditTask from './BtnEditTask.vue'
import BtnDeleteTask from './BtnDeleteTask.vue'
import BtnToggleCompleted from './BtnToggleCompleted.vue'

const props = defineProps<{ task: Task; isListInView1: boolean }>()
</script>
<template>
  <div
    :class="`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
      isListInView1 ? 'items-center' : 'border-t-2 w-full pt-4 mt-4'
    }`"
  >
    <BtnToggleCompleted
      :taskCompleted="props.task.completed"
      :taskId="props.task.id"
      :isListInView1="props.isListInView1"
    />
    <BtnDeleteTask :taskId="props.task.id" />
    <BtnEditTask :task="props.task" />
  </div>
</template>
