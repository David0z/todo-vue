<script setup lang="ts">
import LayoutRoutes from '@/components/Utilities/LayoutRoutes.vue'
import { TaskStore } from '@/stores/Task'
const taskStore = TaskStore()
</script>
<template>
  <LayoutRoutes title="Wszystkie zadania" :tasks="taskStore.tasks"></LayoutRoutes>
</template>
