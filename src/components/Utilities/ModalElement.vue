<script setup lang="ts">
import ModalContent from './ModalContent.vue'

const props = defineProps<{
  onClose: () => void
  title: string
}>()
</script>
<template>
  <Teleport to="#modal">
    <ModalContent :onClose="props.onClose" :title="props.title">
      <slot />
    </ModalContent>
  </Teleport>
</template>
