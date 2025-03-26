<script setup lang="ts">
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
