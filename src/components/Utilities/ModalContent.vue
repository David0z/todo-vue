<script setup lang="ts">
import SvgX from '../../assets/x.svg'

const props = defineProps<{
  onClose: () => void
  title: string
}>()

function closeModalHandler(event: MouseEvent): void {
  if (event.target === event.currentTarget) {
    props.onClose()
  }
}
</script>
<template>
  <div
    class="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200"
    @click="closeModalHandler"
  >
    <section
      className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900"
    >
      <button aria-label="close alert" class="absolute right-3 sm:right-4" @click="props.onClose">
        <SvgX />
      </button>
      <h2 class="font-medium mb-5 text-lg md:text-2xl">{{ props.title }}</h2>
      <slot />
    </section>
  </div>
</template>
