<script setup lang="ts">
import { ModalStore } from '@/stores/Modal'
const modalStore = ModalStore()
</script>
<template>
  <button :class="['btn', $attrs.class]" @click="modalStore.openModalCreateTask">
    Add new task
  </button>
</template>
