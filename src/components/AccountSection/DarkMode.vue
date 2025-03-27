<script setup lang="ts">
import { ref, watch } from 'vue'

const isCurrentDarkmode = ref<boolean>(Boolean(localStorage.getItem('darkmode')) ? true : false)
function toggleDarkMode() {
  isCurrentDarkmode.value = !isCurrentDarkmode.value
}

watch(
  isCurrentDarkmode,
  (value) => {
    const html = document.querySelector<HTMLHtmlElement>('html')!
    if (value) {
      html.classList.add('dark')
      localStorage.setItem('darkmode', 'true')
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0f172a')
    } else {
      html.classList.remove('dark')
      localStorage.removeItem('darkmode')
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#e2e8f0')
    }
  },
  { immediate: true },
)
</script>
<template>
  <button class="mt-8 text-left flex items-center justify-between" @click="toggleDarkMode">
    <span class="dark:text-slate-200">Tryb Ciemny</span>
    <div
      class="w-10 h-5 bg-slate-200 rounded-full px-0.5 dark:bg-slate-700/[.3] relative flex items-center dark:justify-end"
    >
      <div class="w-4 h-4 rounded-full bg-blue-600 absolute"></div>
    </div>
  </button>
</template>
