import { ref } from 'vue'
import { defineStore } from 'pinia'

export const ModalStore = defineStore('Modal', () => {
  const modalCreateTaskOpen = ref(false)

  function openModalCreateTask() {
    modalCreateTaskOpen.value = true
  }

  function closeModalCreateTask() {
    modalCreateTaskOpen.value = false
  }

  return { modalCreateTaskOpen, openModalCreateTask, closeModalCreateTask }
})
