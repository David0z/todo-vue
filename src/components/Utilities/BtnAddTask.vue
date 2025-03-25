<script setup lang="ts">
import { useModalStore } from '@/stores/Modal'
const { openModalCreateTask } = useModalStore()
</script>
<template>
  <button :class="['btn', $attrs.class]" @click="openModalCreateTask">Add new task</button>
</template>
