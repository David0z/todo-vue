<script setup lang="ts">
import { ref } from 'vue'
import { TaskStore } from '../../stores/Task'
import ModalConfirm from '../Utilities/ModalConfirm.vue'

const showModal = ref<boolean>(false)
const setShowModal = (value: boolean) => {
  showModal.value = value
}
const taskStore = TaskStore()
</script>
<template>
  <ModalConfirm
    v-if="showModal"
    :onClose="() => setShowModal(false)"
    text="Wszystkie dane zostaną permanentnie usunięte."
    :onConfirm="taskStore.deleteAllData"
  />
  <button
    class="mt-auto text-left pt-4 hover:text-rose-600 dark:hover:text-slate-200 transition"
    @click="() => setShowModal(true)"
  >
    Usuń wszystkie zadania
  </button>
</template>
