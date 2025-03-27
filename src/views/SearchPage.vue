<script setup lang="ts">
import LayoutRoutes from '@/components/Utilities/LayoutRoutes.vue'
import { TaskStore } from '@/stores/Task'
const taskStore = TaskStore()
</script>
<template>
  <LayoutRoutes title="Search results" :tasks="taskStore.tasks"></LayoutRoutes>
</template>
