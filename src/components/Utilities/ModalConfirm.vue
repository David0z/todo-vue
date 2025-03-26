<script setup lang="ts">
import Modal from './ModalElement.vue'

const props = defineProps<{
  onConfirm: () => void
  onClose: () => void
  text: string
}>()

function confirmAndCloseModal() {
  props.onConfirm()
  props.onClose()
}
</script>
<template>
  <Modal :onClose="props.onClose" title="Are you sure?">
    <p class="text-slate-500">{{ props.text }}</p>
    <div class="mt-7 ml-auto">
      <button @click="props.onClose">Cancel</button>
      <button @click="confirmAndCloseModal" class="btn ml-6">Confirm</button>
    </div>
  </Modal>
</template>
