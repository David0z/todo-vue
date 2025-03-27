<script setup lang="ts">
import LayoutRoutes from '@/components/Utilities/LayoutRoutes.vue'
import { TaskStore } from '@/stores/Task'
import type { Task } from '@/types/task'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const taskStore = TaskStore()
const route = useRoute()
const foundTasks = ref<Task[]>([])

watch(
  () => route.params.taskId,
  (taskId) => {
    foundTasks.value = [taskStore.getTaskById(taskId as string)]
  },
  { immediate: true },
)
</script>
<template>
  <LayoutRoutes title="Znalezione zadanie" :tasks="foundTasks"></LayoutRoutes>
</template>
