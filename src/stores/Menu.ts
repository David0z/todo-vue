import { ref } from 'vue'
import { defineStore } from 'pinia'

export const MenuStore = defineStore('Menu', () => {
  const menuHeaderOpened = ref(false)
  const menuAccountOpened = ref(false)

  function openMenuHeader() {
    menuHeaderOpened.value = true
  }
  function closeMenuHeader() {
    menuHeaderOpened.value = false
  }
  function openMenuAccount() {
    menuAccountOpened.value = true
  }
  function closeMenuAccount() {
    menuAccountOpened.value = false
  }

  return {
    menuHeaderOpened,
    menuAccountOpened,
    openMenuHeader,
    closeMenuHeader,
    openMenuAccount,
    closeMenuAccount,
  }
})
